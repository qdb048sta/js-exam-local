import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Connect } from 'aws-amplify-react';
import { connect } from 'react-redux';
import { graphqlOperation } from 'aws-amplify';
import { Button, Input, Modal } from 'antd';
import debounce from 'lodash/debounce';

import { deleteRoomAction } from 'redux/room/actions';
import { listRooms } from 'graphql/queries';
import { onCreateRoom } from 'graphql/subscriptions';

import PageEmpty from 'components/PageEmpty';
import PageSpin from 'components/PageSpin';
import PageControlBar from 'components/PageControlBar';
import RoomList from './RoomList';
import CreateRoomModal from './CreateRoomModal';

import style from './MainPage.module.scss';

const Search = Input.Search;

class MainPage extends Component {
  state = {
    searchKeyword: '',
    isModalVisible: false,
    delConfirmModalVisible: false,
    delRoom: null,
    delRoomList: [],
  };

  handleOnSearch = debounce(value => {
    this.setState({
      searchKeyword: value.toLowerCase(),
    });
  }, 300);

  handleNewModalButtonOnClick = () => {
    this.setState({
      isModalVisible: true,
    });
  };

  handleModalOnClose = () => {
    this.setState({
      isModalVisible: false,
    });
  };

  hideDelConfirmModal = () => {
    this.setState({
      delConfirmModalVisible: false,
    });
  };

  handleOnOkDelConfirmModal = async () => {
    const { delRoom, delRoomList } = this.state;
    const { deleteRoomAction } = this.props;
    await deleteRoomAction(delRoom);
    this.setState({
      delRoomList: [...delRoomList, delRoom.id],
    });

    this.hideDelConfirmModal();
  };

  render() {
    const { history, signedOn, hostings } = this.props;
    const {
      isModalVisible,
      searchKeyword,
      delConfirmModalVisible,
      delRoom,
      delRoomList,
    } = this.state;

    return (
      <div className={style.Mainpage}>
        <PageControlBar>
          <div>
            <Button
              type="primary"
              icon="plus"
              onClick={this.handleNewModalButtonOnClick}
            >
              Create a room
            </Button>
          </div>
          <div>
            <Search
              style={{ width: 400 }}
              placeholder="input search text"
              onChange={e => this.handleOnSearch(e.target.value)}
            />
          </div>
        </PageControlBar>
        <div className={`${style.content}`}>
          {/* TODO: Room list with with lazy-loading next dataset. Here we load 1000 rooms instead. */}
          <Connect
            query={graphqlOperation(listRooms, { limit: 1000 })}
            subscription={graphqlOperation(onCreateRoom)}
            onSubscriptionMsg={(prev, { onCreateRoom: createdRoom }) => {
              prev.listRooms.items.unshift(createdRoom);
              return prev;
            }}
          >
            {({ data: { listRooms: rooms }, loading, error }) => {
              const outputRooms =
                rooms &&
                rooms.items
                  .map(room => {
                    room.createTimeByDate = new Date(room.createTime);
                    return room;
                  })
                  .sort((a, b) => {
                    return b.createTimeByDate - a.createTimeByDate;
                  })
                  .filter(room => {
                    return (
                      (room.subjectId.toLowerCase().includes(searchKeyword) ||
                        room.description
                          .toLowerCase()
                          .includes(searchKeyword)) &&
                      !delRoomList.includes(room.id)
                    );
                  });

              return (
                <PageSpin spinning={loading}>
                  {!loading && error && (
                    <PageEmpty description={<span>Error Occuring</span>} />
                  )}

                  {!loading && !outputRooms.length && (
                    <PageEmpty
                      description={<span>Room Not Found</span>}
                      image="default"
                    />
                  )}

                  {!loading && outputRooms.length && (
                    <RoomList
                      rooms={outputRooms}
                      signedOn={signedOn}
                      hostings={hostings}
                      triggerDelRoom={room => {
                        this.setState({
                          delConfirmModalVisible: true,
                          delRoom: room,
                        });
                      }}
                    />
                  )}
                </PageSpin>
              );
            }}
          </Connect>
        </div>

        <CreateRoomModal
          visible={isModalVisible}
          history={history}
          onClose={this.handleModalOnClose}
        />
        <Modal
          title=""
          visible={delConfirmModalVisible}
          okType="danger"
          okText="Delete"
          onOk={this.handleOnOkDelConfirmModal}
          onCancel={this.hideDelConfirmModal}
        >
          Are you sure you want to delete room{' '}
          <b>{delRoom ? delRoom.description : ''}</b> ?
        </Modal>
      </div>
    );
  }
}

MainPage.propTypes = {
  history: PropTypes.object.isRequired,
  signedOn: PropTypes.bool,
  hostings: PropTypes.array,
};

const mapStateToProps = state => ({
  signedOn: !!state.login.username,
  hostings: state.login.hostings,
});

const mapDispatchToProps = dispatch => ({
  deleteRoomAction: delRoom => dispatch(deleteRoomAction(delRoom)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);

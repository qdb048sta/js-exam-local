import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Connect } from 'aws-amplify-react';
import { connect } from 'react-redux';
import { graphqlOperation } from 'aws-amplify';
import { Button, Input } from 'antd';
import debounce from 'lodash/debounce';

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

  render() {
    const { history, signedOn, hostings } = this.props;
    const { isModalVisible, searchKeyword } = this.state;

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
                      room.subjectId.toLowerCase().includes(searchKeyword) ||
                      room.description.toLowerCase().includes(searchKeyword)
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

export default connect(mapStateToProps)(MainPage);

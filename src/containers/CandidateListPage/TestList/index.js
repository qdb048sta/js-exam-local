import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteTestAction } from 'redux/test/actions';

import { List, Avatar, Icon, Modal } from 'antd';
import style from './TestList.module.scss';

function getDateTime(string) {
  const T = new Date(string);
  return `${T.getMonth() + 1}-
    ${T.getDate()}-${T.getFullYear()} ${T.getHours()}:
    ${T.getMinutes()}:${T.getSeconds()}`;
}

class TestList extends React.Component {
  state = {
    delConfirmModalVisible: false,
    delTest: null,
    delAnime: false,
  };

  shouldComponentUpdate(nextProps, nextState) {
    return !(this.state.delAnime && !nextState.delAnime);
  }

  handleDeleteButton = test => event => {
    this.setState({ delConfirmModalVisible: true, delTest: test });
  };

  hideDelConfirmModal = () => {
    this.setState({
      delConfirmModalVisible: false,
    });
  };

  handleOnOkDelConfirmModal = async () => {
    const { delTest } = this.state;
    const { deleteTestAction } = this.props;
    this.hideDelConfirmModal();
    // show the delete animation first and then do the delete action
    this.setState({ delAnime: true });
    setTimeout(async () => {
      await deleteTestAction(delTest);
      this.setState({ delAnime: false });
    }, 500);
  };

  render() {
    const { data } = this.props;
    const { delTest, delConfirmModalVisible, delAnime } = this.state;
    return (
      <>
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={item => (
            <List.Item
              className={
                delAnime && delTest && delTest.id === item.id
                  ? style.delAnime
                  : ''
              }
              actions={[
                // <span>Overview</span>,
                <Link
                  to={{
                    pathname: `/admin/playback/${item.id}`,
                  }}
                >
                  Playback
                </Link>,
              ]}
            >
              {item && item.tags && item.tags[0] === localStorage.username && (
                <button
                  type="button"
                  className={style.floatTop}
                  onClick={this.handleDeleteButton(item)}
                >
                  <Icon type="delete" theme="twoTone" twoToneColor="#f00" />
                </button>
              )}
              <List.Item.Meta
                avatar={<Avatar icon="code" className={style.avatar} />}
                title={item.subjectId}
                description={getDateTime(item.timeBegin)}
              />
            </List.Item>
          )}
        />
        <Modal
          title=""
          visible={delConfirmModalVisible}
          okType="danger"
          okText="Delete"
          onOk={this.handleOnOkDelConfirmModal}
          onCancel={this.hideDelConfirmModal}
        >
          Are you sure you want to delete test{' '}
          <b>{delTest ? delTest.subjectId : ''}</b> ?
        </Modal>
      </>
    );
  }
}
TestList.propTypes = {
  data: PropTypes.array,
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  deleteTestAction: delTest => dispatch(deleteTestAction(delTest)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TestList);

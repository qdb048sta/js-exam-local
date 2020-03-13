import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { formatTime } from 'utils/format';

import { List, Avatar, Icon, Button, Modal, Tooltip } from 'antd';
import { deleteTestAction } from '../../../redux/test/actions';

import style from './TestList.module.scss';

import AddSummaryModal from 'components/Summary/AddSummaryModal';
import InterviewSummaryModal from 'components/Summary/InterviewSummaryModal';

class TestList extends React.Component {
  state = {
    delConfirmModalVisible: false,
    delTest: null,
    delAnime: false,
    testResultModalVisible: false,
    testResultModalTarget: '',
    addSummaryModalVisible: false,
    addSummaryModalTarget: '',
    testId: '',
  };

  shouldComponentUpdate(nextProps, nextState) {
    return !(this.state.delAnime && !nextState.delAnime);
  }

  handleDeleteButton = test => () => {
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

  showTestResultModal = e => {
    this.setState({
      testResultModalVisible: true,
      testResultModalTarget: e.target.getAttribute('candidate'),
      testId: e.target.getAttribute('testid'),
    });
  };

  testResultModalCancel = () => {
    this.setState({
      testResultModalVisible: false,
    });
  };

  showAddSummaryModal = e => {
    this.setState({
      addSummaryModalVisible: true,
      addSummaryModalTarget: e.target.getAttribute('candidate'),
      testId: e.target.getAttribute('testid'),
    });
  };

  addSummaryModalCancel = () => {
    this.setState({
      addSummaryModalVisible: false,
    });
  };

  toInterviewResult = data => {
    const interviewers = data.users.items.map(v => v.user);
    const questions = data.records.items.map(v => ({
      id: v.id,
      name: v.ques.name,
    }));
    const comments = [];
    data.records.items.forEach(r => {
      r.comment.items.forEach(c => {
        comments.push({
          questionID: r.id,
          ...c,
        });
      });
    });
    const summaries = data.results.items;
    return { interviewers, questions, comments, summaries };
  };

  render() {
    const { testListData } = this.props;
    const {
      delTest,
      delConfirmModalVisible,
      delAnime,
      testResultModalVisible,
      testResultModalTarget,
      addSummaryModalVisible,
      addSummaryModalTarget,
      testId,
    } = this.state;
    const jeUser = localStorage.jeUser && JSON.parse(localStorage.jeUser);

    return (
      <>
        <List
          itemLayout="horizontal"
          dataSource={testListData}
          renderItem={item => (
            <List.Item
              className={
                delAnime && delTest && delTest.id === item.id
                  ? style.delAnime
                  : ''
              }
              actions={[
                <Button
                  size="small"
                  onClick={this.showTestResultModal}
                  candidate={item.subjectId}
                  testid={item.id}
                >
                  Open Summary
                </Button>,
                <Link
                  to={{
                    pathname: `/admin/playback/${item.id}`,
                  }}
                >
                  Playback
                </Link>,
              ]}
            >
              <List.Item.Meta
                avatar={<Avatar icon="code" className={style.avatar} />}
                title={item.subjectId}
                description={formatTime(item.timeBegin)}
              />
              {item.host && item.host.name === localStorage.username && (
                <button
                  type="button"
                  className={style.floatTop}
                  onClick={this.handleDeleteButton(item)}
                >
                  <Icon type="delete" theme="twoTone" twoToneColor="#f00" />
                </button>
              )}
              {item.users.items &&
                item.users.items.map(v => v.user.id).includes(jeUser.id) &&
                !item.results.items
                  .map(v => v.author)
                  .includes(jeUser.name) && (
                  <Tooltip
                    placement="top"
                    title="write summary"
                    onClick={this.handleSummaryEdit}
                  >
                    <Button
                      type="link"
                      icon="edit"
                      style={{
                        fontSize: '18px',
                        cursor: 'pointer',
                        margin: '0 -20px 0 20px',
                      }}
                      candidate={item.subjectId}
                      testid={item.id}
                      onClick={this.showAddSummaryModal}
                    />
                  </Tooltip>
                )}
            </List.Item>
          )}
        />
        <InterviewSummaryModal
          testID={testId}
          title={`Candidate：${testResultModalTarget}`}
          visible={testResultModalVisible}
          onCancel={this.testResultModalCancel}
          footer={null}
          width={1000}
        ></InterviewSummaryModal>
        <AddSummaryModal
          testID={testId}
          title={addSummaryModalTarget}
          visible={addSummaryModalVisible}
          onCancel={this.addSummaryModalCancel}
          footer={null}
          width={800}
        ></AddSummaryModal>
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
  testListData: PropTypes.array,
};

const mapDispatchToProps = dispatch => ({
  deleteTestAction: delTest => dispatch(deleteTestAction(delTest)),
});
export default connect(null, mapDispatchToProps)(TestList);

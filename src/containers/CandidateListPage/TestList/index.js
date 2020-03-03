import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { formatTime } from 'utils/format';
import { Connect } from 'aws-amplify-react';
import { graphqlOperation } from 'aws-amplify';

import { Row, List, Avatar, Icon, Button, Modal, Tooltip } from 'antd';
import { deleteTestAction } from '../../../redux/test/actions';

import style from './TestList.module.scss';

import { getTest } from './queries';
import PageEmpty from '../../../components/PageEmpty';
import PageSpin from '../../../components/PageSpin';

import SummaryCard from '../../../components/Summary/SummaryCard';
import InterviewQuestions from '../../../components/Summary/InterviewQuestions';
import AddSummaryCard from '../../../components/Summary/AddSummaryCard';

class TestList extends React.Component {
  state = {
    delConfirmModalVisible: false,
    delTest: null,
    delAnime: false,
    testResultModalVisible: false,
    testResultModalTarget: [],
    addSummaryModalVisible: false,
    addSummaryModalTarget: [],
    testResultId: null,
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

  showTestResultModal = e => {
    this.setState({
      testResultModalVisible: true,
      testResultModalTarget: [e.target.getAttribute('candidate')],
      testResultId: e.target.getAttribute('testid'),
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
      addSummaryModalTarget: [e.target.getAttribute('candidate')],
      testResultId: e.target.getAttribute('testid'),
    });
  };

  addSummaryModalCancel = () => {
    this.setState({
      addSummaryModalVisible: false,
    });
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
      testResultId,
    } = this.state;
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
              {item && item.tags && item.tags[0] === localStorage.username && (
                <>
                  <button
                    type="button"
                    className={style.floatTop}
                    onClick={this.handleDeleteButton(item)}
                  >
                    <Icon type="delete" theme="twoTone" twoToneColor="#f00" />
                  </button>
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
                </>
              )}
            </List.Item>
          )}
        />
        <Modal
          title={`Candidate：${testResultModalTarget[0]}`}
          visible={testResultModalVisible}
          onCancel={this.testResultModalCancel}
          footer={null}
          width={1000}
        >
          <Connect
            query={graphqlOperation(getTest, {
              id: testResultId,
            })}
          >
            {({ data, loading, error }) => {
              const test = data && data.getTest;
              let interviewerRecord;
              let interviewers = [];
              if (test && test.records && test.records.items[0]) {
                interviewers = test.records.items[0].comment.items.map(
                  c => c.author,
                );
                console.log(interviewers);
                const comments = test.records.items.map(r => r.comment.items);
                console.log(comments);
                const interviewComments = interviewers.map((viewer, index) => {
                  const questions = test.records.items.map(r =>
                    Object.assign({}, r.ques),
                  );
                  questions.forEach((q, i) => {
                    q.comment = comments[i][index];
                  });
                  return {
                    interviewerName: viewer,
                    questions,
                  };
                });
                console.log(interviewComments);
                interviewerRecord = interviewComments;
              }

              return test ? (
                <PageSpin spinning={loading}>
                  {!loading && error && (
                    <PageEmpty description={<span>Error Occuring</span>} />
                  )}

                  {!loading && !test && (
                    <PageEmpty
                      description={<span>Data Not Found</span>}
                      image="default"
                    />
                  )}

                  {!loading && test && (
                    <>
                      <h2 style={{ fontWeight: '600' }}>Interview Questions</h2>
                      {interviewerRecord.map(item => (
                        <InterviewQuestions
                          key={item.interviewerName}
                          records={item}
                        />
                      ))}
                      <h2 style={{ fontWeight: '600' }}>Summary</h2>
                      <Row type="flex" align="middle" justify="space-around">
                        {interviewerRecord.map((item, index) => (
                          <SummaryCard key={index} records={item} />
                        ))}
                      </Row>
                    </>
                  )}
                </PageSpin>
              ) : null;
            }}
          </Connect>
        </Modal>
        <Modal
          title={`Candidate：${addSummaryModalTarget[0]}`}
          visible={addSummaryModalVisible}
          onCancel={this.addSummaryModalCancel}
          footer={null}
          width={800}
        >
          <Connect
            query={graphqlOperation(getTest, {
              id: testResultId,
            })}
          >
            {({ data, loading, error }) => {
              const test = data && data.getTest;
              let interviewers = [];
              let addSummaryRecord;
              if (test && test.records && test.records.items[0]) {
                interviewers = test.records.items[0].comment.items.map(
                  c => c.author,
                );
                console.log(interviewers);
                const comments = test.records.items.map(r => r.comment.items);
                console.log(comments);
                const interviewComments = interviewers.map((viewer, index) => {
                  const questions = test.records.items.map(r =>
                    Object.assign({}, r.ques),
                  );
                  questions.forEach((q, i) => {
                    q.comment = comments[i][index];
                  });
                  return {
                    interviewerName: viewer,
                    questions,
                  };
                });
                console.log(interviewComments);
                addSummaryRecord = interviewComments;
              }
              return data && data.getTest ? (
                <PageSpin spinning={loading}>
                  {!loading && error && (
                    <PageEmpty description={<span>Error Occuring</span>} />
                  )}

                  {!loading && !test && (
                    <PageEmpty
                      description={<span>Data Not Found</span>}
                      image="default"
                    />
                  )}

                  {!loading && test && (
                    <>
                      {console.log(test)}
                      <h2>Interview Questions</h2>
                      {addSummaryRecord.map(
                        item =>
                          item.interviewerName === localStorage.username && (
                            <InterviewQuestions
                              key={item.interviewerName}
                              records={item}
                            />
                          ),
                      )}

                      <h2>Summary</h2>
                      <Row type="flex" align="middle" justify="space-around">
                        <AddSummaryCard />
                      </Row>
                      <Button
                        type="primary"
                        style={{ margin: '16px 0 0 550px' }}
                      >
                        Add Summary
                      </Button>
                    </>
                  )}
                </PageSpin>
              ) : null;
            }}
          </Connect>
        </Modal>
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

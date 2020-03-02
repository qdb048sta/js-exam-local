import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Rate, Icon, Divider } from 'antd';

class InterviewQuestions extends React.Component {
  render() {
    const { records } = this.props;
    return (
      <>
        {records && (
          <>
            <h3>Interviewer：{records.interviewerName}</h3>
            {records.questions.map((ques, index) => (
              <>
                <Row type="flex" align="middle" style={{ marginTop: '20px' }}>
                  <Col span={8} offset={3}>
                    <h4>{`${index + 1}. ${ques.name}`}</h4>
                  </Col>
                  {ques.comment ? (
                    <>
                      <Col span={4}>
                        <h4 style={{ display: 'inline' }}> Code quality </h4>
                      </Col>
                      <Col span={8}>
                        <Rate disabled defaultValue={ques.comment.quality} />
                      </Col>
                      <Col span={4} offset={11}>
                        <h4 style={{ display: 'inline' }}> Compeleteness </h4>
                      </Col>
                      <Col span={8}>
                        <Rate
                          disabled
                          defaultValue={ques.comment.completeness}
                        />
                      </Col>
                      <Col span={4} offset={11}>
                        <h4 style={{ display: 'inline' }}> How much hints </h4>
                      </Col>
                      <Col span={8}>
                        <Rate
                          disabled
                          defaultValue={ques.comment.hint}
                          character={<Icon type="bulb" theme="filled" />}
                          style={{ color: 'grey' }}
                        />
                      </Col>
                    </>
                  ) : (
                    <>
                      <Col span={4}>
                        <h4 style={{ display: 'inline', color: 'red' }}>
                          {' '}
                          Not Available !{' '}
                        </h4>
                      </Col>
                    </>
                  )}
                </Row>
              </>
            ))}
            <Divider dashed />
          </>
        )}
      </>
    );
  }
}
InterviewQuestions.propTypes = {
  records: PropTypes.object,
};
export default InterviewQuestions;

import React from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { Col, Rate } from 'antd';

import { getTest } from '../../../../graphql/queries';

class InterviewQuestions extends React.Component {
  // async getTestItemById(item) {
  //   const {
  //     data: { getTest: test },
  //   } = await API.graphql(graphqlOperation(getTest, { id: item.id }));
  //   return test;
  // }

  render() {
    return (
      <>
        {/* {data.then(obj => {
          console.log(typeof obj);
        })} */}
        <Col span={8} offset={3}>
          <h4>1. mergeSort</h4>
        </Col>
        <Col span={4}>
          <h4 style={{ display: 'inline' }}> Code quality </h4>
        </Col>
        <Col span={8}>
          <Rate disabled defaultValue={2} />
        </Col>
        <Col span={4} offset={11}>
          <h4 style={{ display: 'inline' }}> Compeleteness </h4>
        </Col>
        <Col span={8}>
          <Rate disabled defaultValue={2} />
        </Col>
        <Col span={4} offset={11}>
          <h4 style={{ display: 'inline' }}> How much hints </h4>
        </Col>
        <Col span={8}>
          <Rate disabled defaultValue={2} />
        </Col>
        {/* <Row type="flex" align="middle">
          <Col span={11} offset={2}>
            <h4>2. forEach, map and reduce</h4>
          </Col>
          <Col span={4}>
            <h4 style={{ display: 'inline' }}> Code quality </h4>
          </Col>
          <Col span={4}>
            <Rate disabled defaultValue={2} />
          </Col>
          <Col span={4} offset={13}>
            <h4 style={{ display: 'inline' }}> Compeleteness </h4>
          </Col>
          <Col span={4}>
            <Rate disabled defaultValue={2} />
          </Col>
          <Col span={4} offset={13}>
            <h4 style={{ display: 'inline' }}> How much hints </h4>
          </Col>
          <Col span={4}>
            <Rate disabled defaultValue={2} />
          </Col>
        </Row>
        <Divider dashed />
        <Row type="flex" align="middle">
          <Col span={11} offset={2}>
            <h4>3. pipe</h4>
          </Col>
          <Col span={4}>
            <h4 style={{ display: 'inline' }}> Code quality </h4>
          </Col>
          <Col span={4}>
            <Rate disabled defaultValue={2} />
          </Col>
          <Col span={4} offset={13}>
            <h4 style={{ display: 'inline' }}> Compeleteness </h4>
          </Col>
          <Col span={4}>
            <Rate disabled defaultValue={2} />
          </Col>
          <Col span={4} offset={13}>
            <h4 style={{ display: 'inline' }}> How much hints </h4>
          </Col>
          <Col span={4}>
            <Rate disabled defaultValue={2} />
          </Col>
        </Row>
        <Divider dashed /> */}
      </>
    );
  }
}

export default InterviewQuestions;

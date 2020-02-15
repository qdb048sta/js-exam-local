import React from 'react';
import PropTypes from 'prop-types';
import { API, graphqlOperation } from 'aws-amplify';
import { Row, Col, Rate, Divider } from 'antd';

import { getTest } from '../../../../graphql/queries';
import CommentCard from '../CommentCard';

class CandidateSummary extends React.Component {
  // async getTestItemById(item) {
  //   const {
  //     data: { getTest: test },
  //   } = await API.graphql(graphqlOperation(getTest, { id: item.id }));
  //   return test;
  // }

  render() {
    const { testListData } = this.props;
    // console.log(testListData);
    // const data = this.getTestItemById(item);
    return (
      <>
        {/* {data.then(obj => {
          console.log(typeof obj);
        })} */}

        <Row type="flex" align="middle">
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
        </Row>
        <Divider dashed />
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
        <h2>Comments</h2>
        <CommentCard testListData={testListData} />
      </>
    );
  }
}
CandidateSummary.propTypes = {
  testListData: PropTypes.array,
};
export default CandidateSummary;

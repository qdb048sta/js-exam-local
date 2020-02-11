import React from 'react';
import PropTypes from 'prop-types';

import { Row, Col, Modal, Button, Rate, Divider } from 'antd';

import CommentCard from '../CommentCard';

class CandidateSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    const { item } = this.props;
    return (
      <>
        <Button size="small" onClick={this.showModal}>
          Open Summary
        </Button>
        <Modal
          title={item.subjectId}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          footer={null}
          width={850}
        >
          <h2>Interview Questions</h2>
          <Row type="flex" align="middle">
            <Col span={11} offset={2}>
              <h4>1. mergeSort</h4>
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
          <Divider dashed />
          <h2>Comments</h2>
          <Row type="flex" align="middle" justify="space-around">
            <CommentCard />
            <CommentCard />
          </Row>
        </Modal>
      </>
    );
  }
}
CandidateSummary.propTypes = {
  item: PropTypes.object,
};
export default CandidateSummary;

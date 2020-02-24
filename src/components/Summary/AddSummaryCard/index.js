import React from 'react';
import { Row, Col, Card, Rate, Input } from 'antd';
import PropTypes from 'prop-types';

const { TextArea } = Input;

class AddSummaryCard extends React.Component {
  render() {
    const { testListData } = this.props;
    return (
      <>
        <Col span={16}>
          <Row type="flex" align="middle" justify="space-between">
            <h3>Interviewer：{testListData[0]}</h3>
          </Row>
          <Card>
            <h4>Technical Skills：</h4>
            <div style={{ textAlign: 'right' }}>
              <h4 style={{ display: 'inline', marginRight: '12px' }}>
                Logical
              </h4>
              <Rate defaultValue={0} />
            </div>
            <div style={{ textAlign: 'right' }}>
              <h4 style={{ display: 'inline', marginRight: '12px' }}>
                JavaScript Familiarity
              </h4>
              <Rate defaultValue={0} />
            </div>
            <TextArea placeholder="Write your comments..." autoFocus />
            <h4 style={{ marginTop: '12px' }}>Personality：</h4>
            <div style={{ textAlign: 'right' }}>
              <h4 style={{ display: 'inline', marginRight: '12px' }}>
                Enjoy to work with
              </h4>
              <Rate defaultValue={0} />
            </div>
            <TextArea placeholder="Write your comments..." />
          </Card>
        </Col>
      </>
    );
  }
}

AddSummaryCard.propTypes = {
  testListData: PropTypes.array.isRequired,
};

export default AddSummaryCard;

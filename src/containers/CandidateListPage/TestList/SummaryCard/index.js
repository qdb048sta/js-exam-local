import React from 'react';
import { Row, Col, Card, Rate } from 'antd';
import PropTypes from 'prop-types';

class SummaryCard extends React.Component {
  render() {
    const { testListData } = this.props;
    return (
      <>
        <Col span={16}>
          <Row type="flex" align="middle" justify="space-between">
            <h3>Interviewer：{testListData[1]}</h3>
          </Row>
          <Card>
            <h4>Technical Skills：</h4>
            <div style={{ textAlign: 'right' }}>
              <h4 style={{ display: 'inline', marginRight: '12px' }}>
                Logical
              </h4>
              <Rate defaultValue={3} disabled />
            </div>
            <div style={{ textAlign: 'right' }}>
              <h4 style={{ display: 'inline', marginRight: '12px' }}>
                JavaScript Familiarity
              </h4>
              <Rate defaultValue={3} disabled />
            </div>
            <Card>
              <p>Card content</p>
            </Card>
            <h4 style={{ marginTop: '12px' }}>Personality：</h4>
            <div style={{ textAlign: 'right' }}>
              <h4 style={{ display: 'inline', marginRight: '12px' }}>
                Enjoy to work with
              </h4>
              <Rate defaultValue={3} disabled />
            </div>
            <Card>
              <p>Card content</p>
            </Card>
          </Card>
        </Col>
      </>
    );
  }
}

SummaryCard.propTypes = {
  testListData: PropTypes.array,
};

export default SummaryCard;

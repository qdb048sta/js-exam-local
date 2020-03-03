import React from 'react';
import { Row, Col, Card, Rate } from 'antd';
import PropTypes from 'prop-types';

class SummaryCard extends React.Component {
  render() {
    const { records } = this.props;
    return (
      <>
        {records && (
          <Col span={10}>
            <Row type="flex" align="middle" justify="space-around">
              <h3>Interviewer：{records.interviewerName}</h3>
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
        )}
      </>
    );
  }
}

SummaryCard.propTypes = {
  records: PropTypes.array,
};

export default SummaryCard;

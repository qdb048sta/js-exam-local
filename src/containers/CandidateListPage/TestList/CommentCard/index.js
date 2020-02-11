import React from 'react';
import { Col, Card, Rate, Input } from 'antd';

const { TextArea } = Input;

class CommentCard extends React.Component {
  render() {
    return (
      <>
        <Col span={11}>
          <h3>Interviewer:</h3>
          <Card>
            <h4>Technical Skills：</h4>
            <div style={{ textAlign: 'right' }}>
              <h4 style={{ display: 'inline', marginRight: '12px' }}>
                Logical
              </h4>
              <Rate
                type="flex"
                align="middle"
                justify="space-around"
                defaultValue={3}
              />
            </div>
            <div style={{ textAlign: 'right' }}>
              <h4 style={{ display: 'inline', marginRight: '12px' }}>
                JavaScript Familiarity
              </h4>
              <Rate
                type="flex"
                align="middle"
                justify="space-around"
                defaultValue={3}
              />
            </div>
            <TextArea placeholder="Write your comments..." />
            <h4 style={{ marginTop: '12px' }}>Personality：</h4>
            <div style={{ textAlign: 'right' }}>
              <h4 style={{ display: 'inline', marginRight: '12px' }}>
                Enjoy to work with
              </h4>
              <Rate
                type="flex"
                align="middle"
                justify="space-around"
                defaultValue={3}
              />
            </div>
            <TextArea placeholder="Write your comments..." />
          </Card>
        </Col>
      </>
    );
  }
}

export default CommentCard;

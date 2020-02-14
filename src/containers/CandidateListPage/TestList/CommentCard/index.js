import React from 'react';
import { Row, Col, Card, Rate, Input, Button, Tooltip, Icon } from 'antd';
import PropTypes from 'prop-types';

const { TextArea } = Input;

class CommentCard extends React.Component {
  state = {
    canInterviewerEdit: false,
  };

  handleSummaryEdit = () => {
    this.setState({
      canInterviewerEdit: true,
    });
  };

  saveSummary = () => {
    this.setState({
      canInterviewerEdit: false,
    });
  };

  render() {
    const { testListData } = this.props;
    return (
      <>
        <Row type="flex" align="middle" justify="space-around">
          <Col span={16}>
            <Row type="flex" align="middle" justify="space-between">
              <h3>Interviewer：{testListData[1]}</h3>
              <Tooltip
                placement="top"
                title="edit"
                onClick={this.handleSummaryEdit}
              >
                <Icon
                  type="edit"
                  style={{
                    fontSize: '20px',
                    textAlign: 'right',
                    cursor: 'pointer',
                  }}
                />
              </Tooltip>
            </Row>
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
              <TextArea
                placeholder="Write your comments..."
                readOnly={!this.state.canInterviewerEdit}
              />
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
              <TextArea
                placeholder="Write your comments..."
                readOnly={!this.state.canInterviewerEdit}
              />
            </Card>
            {this.state.canInterviewerEdit ? (
              <Button
                size="small"
                style={{ margin: '8px 0' }}
                onClick={this.saveSummary}
              >
                Save
              </Button>
            ) : null}
          </Col>
        </Row>
      </>
    );
  }
}

CommentCard.propTypes = {
  testListData: PropTypes.array,
};

export default CommentCard;

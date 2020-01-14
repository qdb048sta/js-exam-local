import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Comment, Avatar, List, Rate } from 'antd';

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
const Summary = ({ summaryList, visible, onCancel }) => (
  <Modal
    title={`${summaryList.length} summary`}
    visible={visible}
    onCancel={onCancel}
    footer={null}
  >
    {summaryList.length > 0 && <SummaryList data={summaryList} />}
  </Modal>
);

const SummaryList = ({ data }) => (
  <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={item => (
      <React.Fragment>
        Technical Skill{' '}
        <Rate
          disabled
          tooltips={desc}
          value={JSON.parse(item.content).input.rateTech}
        />
        <br />
        Completeness{' '}
        <Rate
          disabled
          tooltips={desc}
          value={JSON.parse(item.content).input.rateComplete}
        />
        <Comment
          author={item.author}
          content={JSON.parse(item.content).input.summary}
          avatar={<Avatar>{item.author[0].toUpperCase()}</Avatar>}
        />
      </React.Fragment>
    )}
  />
);

Summary.propTypes = {
  summaryList: PropTypes.array,
  visible: PropTypes.bool,
  onCancel: PropTypes.func,
};

SummaryList.propTypes = {
  data: PropTypes.array,
};
export default Summary;

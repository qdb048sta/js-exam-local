import React from 'react';
import PropTypes from 'prop-types';
import { Selector } from 'antd';

const { Option } = Selector;
const QuestionLevelSelector = ({
  questionLevelIndex,
  onChange,
  list,
  disabled,
}) => (
  <Selector
    onChange={onChange}
    defaultValue={questionLevelIndex}
    disabled={disabled}
    style={{ minWidth: 200 }}
  >
    {list.map(v => (
      <Option value={v} />
    ))}
  </Selector>
);

QuestionLevelSelector.propTypes = {
  questionLevelIndex: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default QuestionLevelSelector;

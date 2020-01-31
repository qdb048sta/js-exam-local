import React from 'react';
import PropTypes from 'prop-types';
import AceEditor from 'react-ace';
import styles from './TestWidget.module.scss';

const TestWidget = ({ data, readOnly = true, handleCodeChange = () => {} }) => (
  <div className={`${styles['test-widget']}`}>
    <AceEditor
      showPrintMargin={false}
      mode="javascript"
      theme="textmate"
      value={data}
      readOnly={readOnly}
      tabSize={2}
      onChange={handleCodeChange}
    />
  </div>
);

TestWidget.propTypes = {
  data: PropTypes.string,
  readOnly: PropTypes.bool,
  handleCodeChange: PropTypes.func,
};

export default TestWidget;

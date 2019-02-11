import React from 'react';
import PropTypes from 'prop-types';
import PageControlBar from 'components/PageControlBar';
import RecordSelector from 'components/Selectors/RecordSelector';
import { Button, Icon, Input } from 'antd';
import styles from './ControlWidget.module.scss';

const InputGroup = Input.Group;

function getDateOutput(dateTime) {
  const date = new Date(dateTime);
  return date.toLocaleString();
}

const ControlWidget = ({
  recordIndex,
  onChangeRecord,
  recordList,
  onClickSummary,
  interviewee,
  testDate,
  summaryDisabled,
}) => (
  <PageControlBar>
    <div className={styles.info}>
      <span className={styles.icon} id={styles.date}>
        <Icon className={styles.icon} type="calendar" />
        {getDateOutput(testDate)}
      </span>
      <span className={styles.icon} id={styles.name}>
        <Icon className={styles.icon} type="user" />
        {interviewee}
      </span>
    </div>
    <div>
      <InputGroup compact style={{ width: 'auto', display: 'inline-block' }}>
        <Button
          type="primary"
          disabled={summaryDisabled}
          onClick={onClickSummary}
        >
          Summary
        </Button>
        <RecordSelector
          onChange={onChangeRecord}
          recordIndex={recordIndex}
          list={recordList}
        />
      </InputGroup>
    </div>
  </PageControlBar>
);
ControlWidget.propTypes = {
  testDate: PropTypes.string,
  interviewee: PropTypes.string,
  recordIndex: PropTypes.number,
  onChangeRecord: PropTypes.func,
  recordList: PropTypes.array,
  onClickSummary: PropTypes.func,
  summaryDisabled: PropTypes.bool,
};
export default ControlWidget;

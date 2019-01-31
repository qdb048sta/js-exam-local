import React from 'react';
import PropTypes from 'prop-types';
import PageControlBar from 'components/PageControlBar';
import RecordSelector from 'components/Selectors/RecordSelector';
import { Button, Icon, Input } from 'antd';
import styles from './ControlWidget.module.scss';

const InputGroup = Input.Group;

const ControlWidget = ({
  recordIndex,
  onChangeRecord,
  recordList,
  onClickSummary,
}) => (
  <PageControlBar>
    <div>
      <InputGroup compact style={{ width: 'auto', display: 'inline-block' }}>
        <Button type="primary" onClick={onClickSummary}>
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
};
export default ControlWidget;

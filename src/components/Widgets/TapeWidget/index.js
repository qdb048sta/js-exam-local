import React from 'react';
// Use inspect, from node util, to stringify codes.
// JSON.stringify will cause problem when the target contains
// circular in the object structure.
import { inspect } from 'util';
import { checkAllPass } from 'utils/checkAllPass';

import styles from './TapeWidget.module.scss';

const TestRow = row => <div className={styles.test}>{row.name}</div>;

const AssertRow = row => {
  const actual =
    typeof row.actual === 'object' ? inspect(row.actual) : `${row.actual}`;
  const expected =
    typeof row.expected === 'object'
      ? inspect(row.expected)
      : `${row.expected}`;
  return (
    <div className={`${styles.assert} ${row.ok ? styles.ok : styles.fail}`}>
      <div className={row.ok ? styles.ok : styles.fail}>
        {row.ok ? 'OK' : 'FAIL'}
      </div>
      {row.name ? <div className={styles.name}>{`${row.name}`}</div> : null}
      {!row.ok ? (
        <>
          <div className={styles.actual}>{actual}</div>
          <div className={styles['not-equal']}>!=</div>
          <div className={styles.expected}>{expected}</div>
          {typeof row.actual === 'string' &&
          typeof row.expected === 'string' ? (
            <div className={styles.diff}>
              <span className={styles.expected}>{expected}</span>
              <span className={styles.actual}>{actual}</span>
            </div>
          ) : null}
        </>
      ) : null}
    </div>
  );
};

// TODO: add endrow component
const EndRow = row => <div>{inspect(row)}</div>;

const DescriptionRow = ({ description }) => (
  <div className={styles.description}>{description}</div>
);

const getRow = (row, index) => {
  switch (row.type) {
    case 'test':
      return <TestRow key={inspect(row + index)} {...row} />;
    case 'assert':
      return <AssertRow key={inspect(row + index)} {...row} />;
    case 'end':
      return <EndRow key={inspect(row + index)} {...row} />;
    case undefined && typeof row === 'string':
      return <DescriptionRow description={row} key={row + index} />;
    default:
      return null;
  }
};

const TapeWidget = ({ data }) => {
  checkAllPass(data);
  return <div className={styles.tape}>{data.map(getRow)}</div>;
};

export default TapeWidget;

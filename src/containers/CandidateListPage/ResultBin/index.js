import React from 'react';
import PropTypes from 'prop-types';

import { Collapse } from 'antd';

import TestList from '../TestList';

const Panel = Collapse.Panel;

const Months = [
  'Jan.',
  'Feb.',
  'Mar.',
  'Apr.',
  'May',
  'Jun.',
  'Jul.',
  'Aug.',
  'Sep.',
  'Oct.',
  'Nov.',
  'Dec.',
];

const byTime = ascending => (a, b) => {
  let result;

  if (a === null || b === null) {
    if (a === null) result = 1;
    else if (b === null) result = -1;
  } else {
    const A = new Date(a.timeBegin).getTime();
    const B = new Date(b.timeBegin).getTime();
    result = A - B;
  }

  return ascending ? result : result * -1;
};

function getFullDate(dateOb) {
  return `${Months[dateOb.getMonth()]} 
    ${dateOb.getDate()}, 
    ${dateOb.getFullYear()}`;
}

const isValid = variable => {
  if (variable === undefined || variable === null) return false;
  return true;
};

const ResultBin = ({ tests }) => {
  let currentD;
  let currentT;
  let nextD;
  let head;
  let sortedTests;

  if (tests) {
    sortedTests = tests.filter(test => isValid(test)).sort(byTime(false));
  }

  return sortedTests ? (
    <Collapse accordion>
      {sortedTests.map((test, i) => {
        if (test !== null) {
          currentT = new Date(test.timeBegin);
          currentD = getFullDate(currentT);

          if (head === undefined) head = i;

          if (isValid(sortedTests[i + 1])) {
            nextD = getFullDate(new Date(sortedTests[i + 1].timeBegin));
          }

          if (nextD !== currentD || !isValid(sortedTests[i + 1])) {
            const dataOfDay = sortedTests.slice(head, i + 1);
            head = i + 1;
            return (
              <Panel header={currentD} key={test.id}>
                <TestList data={dataOfDay} />
              </Panel>
            );
          }
        }
        return null;
      })}
    </Collapse>
  ) : null;
};

ResultBin.propTypes = {
  tests: PropTypes.array,
};

export default ResultBin;

import { makeActionType } from 'utils/constantsHelper';

export const UPDATE_RECORD = makeActionType(
  'containers/ExamPage/UPDATE_RECORD',
);
export const CREATE_HISTORY = makeActionType(
  'containers/ExamPage/CREATE_HISTORY',
);

export const REDUCER_KEY = 'ExamPage';

// export const QUESTION_TYPE = {
//   JAVASCRIPT: 'javascript',
//   REACT: 'react',
//   CONCEPT: 'concept',
// };

export const QUESTION_TYPE = {
  javascript: 0,
  react: 1,
  concept: 2,
  0: 'javascript',
  1: 'react',
  2: 'concept',
};

export const EXAM_USER_NAME = 'User - Exam';

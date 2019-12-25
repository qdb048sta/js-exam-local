import { makeActionType } from 'utils/constantsHelper';

export const UPDATE_RECORD = makeActionType(
  'containers/ExamPage/UPDATE_RECORD',
);
export const CREATE_HISTORY = makeActionType(
  'containers/ExamPage/CREATE_HISTORY',
);

export const REDUCER_KEY = 'ExamPage';

export const QUESTION_TYPE = {
  JAVASCRIPT: 'javascript',
  REACT: 'react',
};

export const EXAM_USER_NAME = 'User - Exam';

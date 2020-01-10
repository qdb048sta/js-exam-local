import {
  createQuestion,
  updateQuestion,
  deleteQuestion,
  listQuestions,
  getQuestion,
} from 'utils/question';

import graphqlActionHelper, { ACTION_STATE } from 'utils/graphqlActionHelper';

// CreateQuestion
function createQuestionAction(id) {
  return async dispatch => {
    dispatch(
      graphqlActionHelper({
        method: 'CREATE',
        dataName: 'QUESTION',
        actionState: ACTION_STATE.STARTED,
      }),
    );
    try {
      const result = await createQuestion(id);
      dispatch(
        graphqlActionHelper({
          method: 'CREATE',
          dataName: 'QUESTION',
          actionState: ACTION_STATE.SUCCESS,
          result,
        }),
      );
    } catch (error) {
      dispatch(
        graphqlActionHelper({
          method: 'CREATE',
          dataName: 'QUESTION',
          actionState: ACTION_STATE.FAILURE,
          result: error,
        }),
      );
    }
  };
}

// UpdateQuestion
function updateQuestionAction(id) {
  return async dispatch => {
    dispatch(
      graphqlActionHelper({
        method: 'UPDATE',
        dataName: 'QUESTION',
        actionState: ACTION_STATE.STARTED,
      }),
    );
    try {
      const result = await updateQuestion(id);
      dispatch(
        graphqlActionHelper({
          method: 'UPDATE',
          dataName: 'QUESTION',
          actionState: ACTION_STATE.SUCCESS,
          result,
        }),
      );
    } catch (error) {
      dispatch(
        graphqlActionHelper({
          method: 'UPDATE',
          dataName: 'QUESTION',
          actionState: ACTION_STATE.FAILURE,
          result: error,
        }),
      );
    }
  };
}

// DeleteQuestion
function deleteQuestionAction(id) {
  return async dispatch => {
    dispatch(
      graphqlActionHelper({
        method: 'DELETE',
        dataName: 'QUESTION',
        actionState: ACTION_STATE.STARTED,
      }),
    );
    try {
      const result = await deleteQuestion(id);
      dispatch(
        graphqlActionHelper({
          method: 'DELETE',
          dataName: 'QUESTION',
          actionState: ACTION_STATE.SUCCESS,
          result,
        }),
      );
    } catch (error) {
      dispatch(
        graphqlActionHelper({
          method: 'DELETE',
          dataName: 'QUESTION',
          actionState: ACTION_STATE.FAILURE,
          result: error,
        }),
      );
    }
  };
}

// GetQuestion
function fetchQuestion(id) {
  return async dispatch => {
    dispatch(
      graphqlActionHelper({
        method: 'FETCH',
        dataName: 'QUESTION',
        actionState: ACTION_STATE.STARTED,
      }),
    );
    try {
      const result = await getQuestion(id);
      dispatch(
        graphqlActionHelper({
          method: 'FETCH',
          dataName: 'QUESTION',
          actionState: ACTION_STATE.SUCCESS,
          result,
        }),
      );
    } catch (error) {
      dispatch(
        graphqlActionHelper({
          method: 'FETCH',
          dataName: 'QUESTION',
          actionState: ACTION_STATE.FAILURE,
          result: error,
        }),
      );
    }
  };
}

// ListQuestions
function fetchQuestionList(type) {
  return async dispatch => {
    dispatch(
      graphqlActionHelper({
        method: 'FETCH',
        dataName: 'QUESTION',
        actionState: ACTION_STATE.STARTED,
      }),
    );
    try {
      const result = await listQuestions(type);
      dispatch(
        graphqlActionHelper({
          method: 'FETCH',
          dataName: 'QUESTION_LIST',
          actionState: ACTION_STATE.SUCCESS,
          result: result.items,
          type,
        }),
      );
    } catch (error) {
      dispatch(
        graphqlActionHelper({
          method: 'FETCH',
          dataName: 'QUESTION',
          actionState: ACTION_STATE.FAILURE,
          result: error,
        }),
      );
    }
  };
}

export {
  createQuestionAction,
  updateQuestionAction,
  deleteQuestionAction,
  fetchQuestionList,
  fetchQuestion,
};

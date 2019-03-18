const initialState = {
  loading: false,
  list: [],
  type: '',
  name: '',
  content: '',
  test: '',
  tags: [],
};

const question = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_QUESTION_STARTED':
    case 'UPDATE_QUESTION_STARTED':
    case 'DELETE_QUESTION_STARTED':
    case 'FETCH_QUESTION_STARTED':
      return {
        ...state,
        loading: true,
      };
    case 'CREATE_QUESTION_SUCCESS':
      const { createQuestion } = action.payload.result.data;
      const ret = {
        ...state,
        loading: false,
        list: [
          ...state.list,
          {
            id: createQuestion.id,
            name: createQuestion.name,
            type: createQuestion.type,
          },
        ],
      };
      return ret;
    case 'UPDATE_QUESTION_SUCCESS':
      return {
        ...state,
        loading: false,
      };
    case 'DELETE_QUESTION_SUCCESS':
      const { deleteQuestion } = action.payload.result.data;
      // Delete item
      let deleteIndex = state.list.findIndex(item => {
        return item.id === deleteQuestion.id;
      });
      state.list.splice(deleteIndex, 1);
      return {
        ...state,
        loading: false,
        list: state.list,
      };
    case 'FETCH_QUESTION_LIST_SUCCESS':
      return {
        ...state,
        loading: false,
        list: action.payload.result,
        type: action.payload.type,
      };
    case 'FETCH_QUESTION_SUCCESS':
      return {
        ...state,
        loading: false,
        name: action.payload.result.name,
        content: action.payload.result.content,
        test: action.payload.result.test,
        tags: action.payload.result.tags,
      };
    case 'CREATE_QUESTION_FAILURE':
    case 'UPDATE_QUESTION_FAILURE':
    case 'DELETE_QUESTION_FAILURE':
    case 'FETCH_QUESTION_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    default:
      return state;
  }
};

export default question;

const initialState = {
  del: false,
  delSuc: false,
  delErr: false,
};

const test = (state = initialState, action) => {
  switch (action.type) {
    case 'DELETE_TEST_STARTED':
      return {
        ...state,
        del: true,
        delSuc: false,
        delErr: false,
      };

    case 'DELETE_TEST_SUCCESS':
      return {
        ...state,
        del: false,
        delSuc: true,
        delErr: false,
      };

    case 'DELETE_TEST_FAILURE':
      return {
        ...state,
        del: false,
        delSuc: false,
        delErr: true,
      };

    default:
      return state;
  }
};

export default test;

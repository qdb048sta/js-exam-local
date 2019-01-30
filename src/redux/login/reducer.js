import { authLogin } from 'utils/authLogin';
import { SET_USERNAME } from './constants';

const initialState = {
  isLogin: false,
  username: localStorage.getItem('username'),
};

const login = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN/LOGIN': {
      return { isLogin: authLogin(action.password) };
    }
    case SET_USERNAME: {
      return { username: action.data };
    }
    default:
      return state;
  }
};

export default login;

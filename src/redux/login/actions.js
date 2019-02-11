import { SET_USERNAME } from './constants';

export function submitPassword(password) {
  return {
    type: 'LOGIN/LOGIN',
    password,
  };
}

export function setUsername(data) {
  return {
    type: SET_USERNAME,
    data,
  };
}

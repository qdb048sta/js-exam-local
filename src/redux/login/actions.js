import {
  LOGIN,
  SET_USERNAME,
  SET_HOSTINGS,
  DEL_HOSTINGS,
  LOGOUT,
} from './constants';

export function submitPassword(password) {
  return {
    type: LOGIN,
    password,
  };
}

export function setUsername(data) {
  localStorage.setItem('username', data);
  localStorage.setItem('hostings', JSON.stringify([]));
  return {
    type: SET_USERNAME,
    data,
  };
}

export function setHostings(data) {
  let hostings = JSON.parse(localStorage.getItem('hostings'));
  if (!hostings) hostings = [];
  if (data) hostings.push(data);
  localStorage.setItem('hostings', JSON.stringify(hostings));
  return {
    type: SET_HOSTINGS,
    data: hostings,
  };
}

export function deleteHostings(data) {
  const hostings = JSON.parse(localStorage.getItem('hostings'));
  hostings.splice(hostings.indexOf(data), 1);
  localStorage.setItem('hostings', JSON.stringify(hostings));
  return {
    type: DEL_HOSTINGS,
    data: hostings,
  };
}

export function clearUser() {
  localStorage.removeItem('username');
  localStorage.removeItem('hostings');
  return {
    type: LOGOUT,
  };
}

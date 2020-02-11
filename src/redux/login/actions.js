import { Auth } from 'aws-amplify';
import filter from 'lodash/filter';
import { API, graphqlOperation } from 'aws-amplify';
import { listJeUsers } from 'graphql/queries';
import {
  LOGIN,
  AUTO_LOGIN,
  SET_USERNAME,
  SET_HOSTINGS,
  DEL_HOSTINGS,
  LOGOUT,
} from './constants';
import * as loginAction from './actions';

export function autoLogin() {
  return async dispatch => {
    const result = await Auth.signIn('Interviewee', 'Interviewee@123456');
    dispatch({
      type: AUTO_LOGIN,
      isLogin: !!result,
    });
  };
}

// this function seens never used
export function submitPassword(password) {
  return {
    type: LOGIN,
    password,
  };
}

export function setUsername(data) {
  localStorage.setItem('username', data);
  return async dispatch => {
    try {
      const {
        data: {
          listJEUsers: { items: result },
        },
      } = await API.graphql(
        graphqlOperation(listJeUsers, {
          filter: { name: { eq: data } },
          limit: 1000,
        }),
      );
      result.forEach(jeUser => {
        if (jeUser.room) dispatch(loginAction.setHostings(jeUser.room.id));
      });
    } catch (error) {
      console.log('error:', error);
    }
    dispatch({
      type: SET_USERNAME,
      data,
    });
  };
}

export function setHostings(roomId) {
  let hostings = JSON.parse(localStorage.getItem('hostings'));
  if (!hostings) hostings = [];
  hostings.push(roomId);
  localStorage.setItem('hostings', JSON.stringify(hostings));
  return {
    type: SET_HOSTINGS,
    data: hostings,
  };
}

export function deleteHostings(roomId) {
  let hostings = JSON.parse(localStorage.getItem('hostings'));
  hostings = filter(hostings, id => id !== roomId);
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

/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import login from 'redux/login/reducer';
import room from 'redux/room/reducer';
import record from 'redux/record/reducer';
import question from 'redux/question/reducer';
import code from 'redux/code/reducer';
import consoleMsg from 'redux/consoleMsg/reducer';
import createPageReducer from 'redux/createRoomModal/reducer';
import tape from 'redux/tape/reducer';
import history from 'redux/history/reducer';
import test from 'redux/test/reducer';
import playback from 'redux/playback/reducer';

/**
 * Merges the dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  return combineReducers({
    login,
    room,
    record,
    question,
    code,
    consoleMsg,
    createPageReducer,
    tape,
    history,
    test,
    playback,
    form: formReducer,
    ...injectedReducers,
  });
}

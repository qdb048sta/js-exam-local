import { API, graphqlOperation } from 'aws-amplify';
import * as mutations from 'graphql/mutations';
import { setCurrentRecord, resetCurrentRecord } from 'redux/record/actions';
import { deleteHostings } from 'redux/login/actions';
import graphqlActionHelper, { ACTION_STATE } from 'utils/graphqlActionHelper';

function getRoomInfo(id) {
  return async dispatch => {
    dispatch(
      graphqlActionHelper({
        method: 'FETCH',
        dataName: 'ROOM',
        actionState: ACTION_STATE.STARTED,
      }),
    );
    try {
      const {
        data: { getRoom: result },
      } = await API.graphql(
        graphqlOperation(
          `query GetRoom($id: ID!) {
        getRoom(id: $id) {
          id
          test {
            id
            subjectId
            description
            timeBegin
            timeEnd
            status
            tags
          }
          subjectId
          description
          host {
            id
            name
          }
          createTime
          password
          users {
            items {
              id
              name
            }
            nextToken
          }
          currentRecord {
            id
            subjectId
            syncCode
            timeBegin
            timeEnd
            status
            ques {
              name
              type
              content
              test
            }
          }
        }
      }
      `,
          { id },
        ),
      );
      dispatch(
        graphqlActionHelper({
          method: 'FETCH',
          dataName: 'ROOM',
          actionState: ACTION_STATE.SUCCESS,
          result,
        }),
      );
      if (result && result.currentRecord) {
        dispatch(setCurrentRecord(result.currentRecord));
      } else {
        dispatch(resetCurrentRecord());
      }
    } catch (error) {
      dispatch(
        graphqlActionHelper({
          method: 'FETCH',
          dataName: 'ROOM',
          actionState: ACTION_STATE.FAILURE,
          result: error,
        }),
      );
      console.log(error);
    }
  };
}

function updateRoomInfo(id) {
  return async dispatch => {
    dispatch(
      graphqlActionHelper({
        method: 'UPDATE',
        dataName: 'ROOM',
        actionState: ACTION_STATE.STARTED,
      }),
    );
    try {
      const password = Math.random()
        .toString(15)
        .substr(2);
      localStorage.examRoomPassword = password;
      const result = await API.graphql(
        graphqlOperation(mutations.updateRoom, {
          input: {
            id,
            password,
          },
        }),
      );
      dispatch(
        graphqlActionHelper({
          method: 'UPDATE',
          dataName: 'ROOM',
          actionState: ACTION_STATE.SUCCESS,
          result,
        }),
      );
    } catch (error) {
      dispatch(
        graphqlActionHelper({
          method: 'UPDATE',
          dataName: 'ROOM',
          actionState: ACTION_STATE.FAILURE,
          result: error,
        }),
      );
    }
  };
}

function deleteRoomAction(delRoom) {
  return async (dispatch, getState) => {
    dispatch(
      graphqlActionHelper({
        method: 'DELETE',
        dataName: 'ROOM',
        actionState: ACTION_STATE.STARTED,
      }),
    );
    try {
      // get the full infomation of room instead of using param of function directly,
      // since aws graphql sometime fetch data incompletely when query list.
      const getRoom = `query GetRoom($id: ID!) {
        getRoom(id: $id) {
          id
          test {
            id
            subjectId
            description
            timeBegin
            timeEnd
            status
            tags
            host{
              id
              name
            }
          }
          subjectId
          description
          host {
            id
            name
          }
          createTime
          password
          users {
            items {
              id
              name
            }
            nextToken
          }
          currentRecord {
            id
            subjectId
            syncCode
            timeBegin
            timeEnd
            status
          }
        }
      }`;
      const {
        data: { getRoom: room },
      } = await API.graphql(graphqlOperation(getRoom, { id: delRoom.id }));
      const testId = room && room.test && room.test.id;
      if (testId) {
        await API.graphql(
          graphqlOperation(mutations.updateTest, {
            input: {
              id: testId,
              timeEnd: new Date(),
            },
          }),
        );
      }
      const roomHostId = room.test ? room.test.host.id : room.users.items[0].id;
      const roomHost = await API.graphql(
        graphqlOperation(mutations.deleteJeUser, {
          input: {
            id: roomHostId,
          },
        }),
      );
      const delResult = await API.graphql(
        graphqlOperation(mutations.deleteRoom, {
          input: {
            id: room.id,
          },
        }),
      );

      dispatch(deleteHostings(room.id));

      const action = delResult.data.deleteRoom
        ? ACTION_STATE.SUCCESS
        : ACTION_STATE.FAILURE;

      dispatch(
        graphqlActionHelper({
          method: 'DELETE',
          dataName: 'ROOM',
          actionState: action,
        }),
      );
      dispatch(resetCurrentRecord());
    } catch (error) {
      dispatch(
        graphqlActionHelper({
          method: 'DELETE',
          dataName: 'ROOM',
          actionState: ACTION_STATE.FAILURE,
          result: error,
        }),
      );
      console.log(error);
    }
  };
}

function setRoomHost(isHost) {
  return {
    type: 'SET_ROOMHOST',
    isHost,
  };
}

function updateRoomSyncCode(newCode) {
  return {
    type: 'UPDATE_ROOM_SYNCCODE',
    syncCode: newCode,
  };
}

export {
  getRoomInfo,
  deleteRoomAction,
  updateRoomInfo,
  setRoomHost,
  updateRoomSyncCode,
};

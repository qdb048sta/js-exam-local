import { CREATE_ROOM } from './constants';

const initialState = {
  createRoom: false,
  createRoomSuc: false,
  createRoomErr: false,
  createdRoomData: {},
};

function createPageReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_ROOM.REQUEST:
      return {
        createRoom: true,
        createRoomSuc: false,
        createRoomErr: false,
      };

    case CREATE_ROOM.SUCCESS:
      return {
        createRoom: false,
        createRoomSuc: true,
        createRoomErr: false,
        createdRoomData: {
          ...action.data,
        },
      };

    case CREATE_ROOM.FAILURE:
      return {
        createRoom: false,
        createRoomSuc: false,
        createRoomErr: true,
      };

    case CREATE_ROOM.RESET:
      return {
        createRoom: false,
        createRoomSuc: false,
        createRoomErr: false,
      };

    default:
      return state;
  }
}

export default createPageReducer;

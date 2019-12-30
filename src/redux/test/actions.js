import { API, graphqlOperation } from 'aws-amplify';
import * as mutations from 'graphql/mutations';
import graphqlActionHelper, { ACTION_STATE } from 'utils/graphqlActionHelper';
import { deleteRoomAction } from 'redux/room/actions';

function deleteTestAction(test) {
  return async dispatch => {
    dispatch(
      graphqlActionHelper({
        method: 'DELETE',
        dataName: 'TEST',
        actionState: ACTION_STATE.STARTED,
      }),
    );
    try {
      // delete the related room
      if (test.room) {
        const room = test.room;
        room.test = { id: test.id, host: { ...test.host } };
        dispatch(deleteRoomAction(room));
      }

      // delete all records of the test
      const recordsId = test.records
        ? test.records.items.map(record => record.id)
        : [];

      let delRecordQl = [];
      for (let i = 0; i < recordsId.length; i += 1) {
        delRecordQl.push(
          API.graphql(
            graphqlOperation(mutations.deleteRecord, {
              input: { id: recordsId[i] },
            }),
          ),
        );
      }
      const delRecordResult = await Promise.all(delRecordQl);

      // delete test
      const delResult = await API.graphql(
        graphqlOperation(mutations.deleteTest, {
          input: { id: test.id },
        }),
      );

      dispatch(
        graphqlActionHelper({
          method: 'DELETE',
          dataName: 'TEST',
          actionState: ACTION_STATE.SUCCESS,
        }),
      );
    } catch (error) {
      dispatch(
        graphqlActionHelper({
          method: 'DELETE',
          dataName: 'TEST',
          actionState: ACTION_STATE.FAILURE,
          result: error,
        }),
      );
      console.log('delete test error: ', error);
    }
  };
}

export { deleteTestAction };

import { API, graphqlOperation } from 'aws-amplify';
import * as mutations from 'graphql/mutations';
import { getTest } from 'graphql/queries';
import graphqlActionHelper, { ACTION_STATE } from 'utils/graphqlActionHelper';
import { deleteRoomAction } from 'redux/room/actions';

function deleteTestAction(delTest) {
  return async dispatch => {
    dispatch(
      graphqlActionHelper({
        method: 'DELETE',
        dataName: 'TEST',
        actionState: ACTION_STATE.STARTED,
      }),
    );
    try {
      // get the full information of test instead of using param of function directly,
      // since aws graphql sometime fetch data incompletely when query list.
      const {
        data: { getTest: test },
      } = await API.graphql(graphqlOperation(getTest, { id: delTest.id }));

      // delete the related room
      if (test.room) await dispatch(deleteRoomAction(test.room));

      // delete all records of the test
      const recordsId = test.records
        ? test.records.items.map(record => record.id)
        : [];

      const delRecordQl = [];
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

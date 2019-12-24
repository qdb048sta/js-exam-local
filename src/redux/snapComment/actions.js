import { API, graphqlOperation } from 'aws-amplify';
import * as mutations from 'graphql/mutations';
import actions from 'redux-form/es/actions';
import get from 'lodash/get';
import { message } from 'antd';
import { FORM_ID as SNAP_COMMENT_FORM_ID } from 'containers/DispatchPage/SnapCommentBar';

export function createSnapComment(data) {
  return async (dispatch, getState) => {
    let latestHistoryId = get(getState(), 'history.data.id');
    // Temporary work around for cannot fetch latest history
    if (!latestHistoryId) {
      const { id: recordId } = getState().record;
      const code = get(getState(), 'room.currentRecord.syncCode');
      if (recordId && !latestHistoryId) {
        try {
          const {
            data: {
              createHistory: { id: historyId },
            },
          } = await API.graphql(
            graphqlOperation(mutations.createHistory, {
              input: {
                time: new Date(),
                code,
                historyRecordId: recordId,
              },
            }),
          );
          latestHistoryId = historyId;
        } catch (error) {
          console.log(error);
        }
      }
    }
    // End
    if (latestHistoryId) {
      try {
        const params = {
          input: {
            time: new Date(),
            author: window.localStorage.getItem('username') || 'Unknown',
            snapCommentHistoryId: latestHistoryId,
            ...data,
          },
        };
        await API.graphql(
          graphqlOperation(mutations.createSnapComment, params),
        );
        // Reset snap-comment form field
        dispatch(actions.reset(SNAP_COMMENT_FORM_ID));
        message.success('Add comment succeeded');
      } catch (error) {
        console.log(error);
        message.error('Add comment failed');
      }
    }
  };
}

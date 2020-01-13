import { API, graphqlOperation } from 'aws-amplify';
import * as mutations from 'graphql/mutations';

const createComment = async commentData => {
  const { commentRecordId, author, rateTech, rateComplete, text } = commentData;
  const params = {
    input: {
      commentRecordId,
      author,
      rateTech,
      rateComplete,
      text,
      time: new Date(),
    },
  };
  const { data } = await API.graphql(
    graphqlOperation(mutations.createComment, params),
  );
  return data.createComment;
};

export default createComment;

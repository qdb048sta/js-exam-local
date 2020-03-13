import { API, graphqlOperation } from 'aws-amplify';
import { createResult } from 'graphql/mutations';

const createSummary = async values => {
  const params = {
    input: {
      ...values,
      time: Date.now(),
    },
  };

  try {
    const { data } = await API.graphql(graphqlOperation(createResult, params));
    return data.createResult;
  } catch (e) {
    throw e;
  }
};

export default createSummary;

import { API, graphqlOperation } from 'aws-amplify';
import { createResult } from 'graphql/mutations';
import moment from 'moment';

const createSummary = async values => {
  const params = {
    input: {
      ...values,
      time: moment().format(),
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

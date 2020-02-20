import { API, graphqlOperation } from 'aws-amplify';
import * as mutations from 'graphql/mutations';

const updateTestEndTime = async id => {
  const params = {
    input: {
      id,
      timeEnd: new Date(),
    },
  };
  const result = await API.graphql(
    graphqlOperation(mutations.updateTest, params),
  );
  return result;
};

export { updateTestEndTime };

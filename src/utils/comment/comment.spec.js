/* eslint-disable import/first */
jest.mock('aws-amplify', () => ({
  API: {},
  graphqlOperation: jest.fn(),
}));
import { API, graphqlOperation } from 'aws-amplify';
import createComment from './comment';

describe('', () => {
  const NOT_PASS = 'graphql not pass';
  const PASS = 'graphql pass';
  const GRAPHQL_ERROR = 'graphql error';

  beforeAll(() => {
    graphqlOperation.mockImplementation(
      (graphqlStr, { input: { author, content, commentRecordId } }) => {
        if (!author || !content || !(commentRecordId >= 0)) {
          return NOT_PASS;
        }
        return PASS;
      },
    );
    API.graphql = jest.fn(
      mockedGraphqlStr =>
        new Promise((resolve, reject) => {
          if (mockedGraphqlStr === PASS) {
            resolve({
              data: {
                createComment: 'createComment',
              },
            });
          } else {
            reject(new Error(GRAPHQL_ERROR));
          }
        }),
    );
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return as expected', async () => {
    const result = await createComment({
      author: 'a',
      content: 'a',
      commentRecordId: 1,
    });
    expect(graphqlOperation).toBeCalledTimes(1);
    expect(API.graphql).toBeCalledTimes(1);
    expect(API.graphql).toBeCalledWith(PASS);
    expect(result).toBe('createComment');
  });

  it('should fail when not providing needed arguments', async () => {
    await expect(createComment({})).rejects.toEqual(Error(GRAPHQL_ERROR));
    expect(graphqlOperation).toBeCalledTimes(1);
    expect(API.graphql).toBeCalledTimes(1);
    expect(API.graphql).toBeCalledWith(NOT_PASS);
  });
});

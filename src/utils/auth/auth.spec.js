/* eslint-disable import/first */
jest.mock('aws-amplify', () => ({
  Auth: { currentAuthenticatedUser: () => {} },
}));
import { Auth } from 'aws-amplify';
import { checkPermission } from './auth';

describe('test permission checking function', () => {
  it('should pass when login with admin', async () => {
    Auth.currentAuthenticatedUser = jest.fn(() =>
      Promise.resolve({
        username: 'Admin',
      }),
    );
    const result = await checkPermission();
    expect(result).toBe(true);
  });

  it('should fail when login with interviewee', async () => {
    Auth.currentAuthenticatedUser = jest.fn(() =>
      Promise.resolve({
        username: 'Interviewee',
      }),
    );
    const result = await checkPermission();
    expect(result).toBe(false);
  });

  it('should return error when aws checking failed', async () => {
    Auth.currentAuthenticatedUser = jest.fn(
      () =>
        new Promise(() => {
          throw new Error('CurrentAuthenticatedUser failed');
        }),
    );
    const result = await checkPermission();
    expect(result).toEqual(new Error('CurrentAuthenticatedUser failed'));
  });
});

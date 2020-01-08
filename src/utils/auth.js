import { Auth } from 'aws-amplify';

const login = async ({ username, password }) => {
  const result = await Auth.signIn(username, password);
  return result;
};

const autoLogin = async () => {
  const result = await Auth.signIn('Candidate', 'Candidate@123456');
  return !!result;
};

const checkPermission = async () => {
  try {
    const result = await Auth.currentAuthenticatedUser();
    return result.username === 'Admin';
  } catch (err) {
    return err;
  }
};

export { login, autoLogin, checkPermission };

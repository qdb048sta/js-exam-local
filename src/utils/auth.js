import { Auth } from 'aws-amplify';
import { EXAM_USER_NAME } from 'containers/ExamPage/constants'

const login = async ({ username, password }) => {
  const result = await Auth.signIn(username, password);
  return result;
};

const autoLogin = async () => {
  const result = await Auth.signIn('Interviewee', 'Interviewee@123456');
  localStorage.setItem('username', EXAM_USER_NAME);
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

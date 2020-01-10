export default {
  getUserName() {
    return window.localStorage.getItem('username') || 'Unknown';
  },
};

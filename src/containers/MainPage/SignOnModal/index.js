import React from 'react';
import { connect } from 'react-redux';

import { setUsername } from 'redux/login/actions';

import { Modal, Input, message, Icon } from 'antd';

class SignOnModal extends React.Component {
  state = {
    visible: false,
    username: '',
  };

  componentDidMount() {
    if (!this.signedOn()) this.showModal();
  }

  signedOn = () => {
    if (localStorage.getItem('username')) return true;
    return false;
  };

  showModal = () => {
    this.setState({
      visible: true,
      username: '',
    });
  };

  onChangeUserName = e => {
    this.setState({ username: e.target.value });
  };

  emitEmpty = () => {
    this.setState({ username: '' });
  };

  handleOk = () => {
    const username = this.state.username;
    try {
      localStorage.setItem('username', username);
      console.log('User: ', username);
      message.success(`Signed on as "${username}"`);
      this.props.onSetUsername(username);
      this.setState({
        visible: false,
        username: '',
      });
    } catch (error) {
      message.error('Fail to sign on!');
    }
  };

  render() {
    const { visible, username } = this.state;
    const suffix = username ? (
      <Icon type="close-circle" onClick={this.emitEmpty} />
    ) : null;
    return (
      <Modal
        title={
          <div>
            <Icon type="login" /> Sign On
          </div>
        }
        closable={false}
        visible={visible}
        onOk={this.handleOk}
        okText="Sign on"
        okButtonProps={{ disabled: !username }}
        cancelButtonProps={{ disabled: true }}
      >
        <Input
          placeholder="Enter a username"
          prefix={<Icon type="user" />}
          suffix={suffix}
          value={username}
          onChange={this.onChangeUserName}
        />
      </Modal>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSetUsername: data => dispatch(setUsername(data)),
});

export default connect(
  null,
  mapDispatchToProps,
)(SignOnModal);

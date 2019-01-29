import React from 'react';

import { Modal, Input, message, Icon } from 'antd';

class SignOnModal extends React.Component {
  state = {
    visible: false,
    userName: '',
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
      userName: '',
    });
  };

  onChangeUserName = e => {
    this.setState({ userName: e.target.value });
  };

  emitEmpty = () => {
    this.setState({ userName: '' });
  };

  handleOk = () => {
    localStorage.setItem('username', JSON.stringify(this.state.userName));
    console.log('User: ', this.state.userName);

    if (this.signedOn()) {
      message.success(`Signed on as "${this.state.userName}"!`);
      this.setState({
        visible: false,
        userName: '',
      });
    } else {
      message.error('Failed to sign on!');
    }
  };

  render() {
    const { visible, userName } = this.state;
    const suffix = userName ? (
      <Icon type="close-circle" onClick={this.emitEmpty} />
    ) : null;
    return (
      <Modal
        title="Sign On"
        closable={false}
        visible={visible}
        onOk={this.handleOk}
        okText="Sign on"
        okButtonProps={{ disabled: !userName }}
        cancelButtonProps={{ disabled: true }}
      >
        <Input
          placeholder="Enter a username"
          prefix={<Icon type="user" />}
          suffix={suffix}
          value={userName}
          onChange={this.onChangeUserName}
        />
      </Modal>
    );
  }
}

export default SignOnModal;

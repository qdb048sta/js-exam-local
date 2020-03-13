import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { setUsername } from 'redux/login/actions';
import { deleteExpiredRoomsAction } from 'redux/room/actions';

import { Modal, Input, message, Icon } from 'antd';

class SignOnModal extends React.Component {
  state = {
    visible: false,
    username: '',
  };

  componentDidMount() {
    if (!this.props.signedOn) this.showModal();
  }

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
    // Capitalize the username
    const capitalUsername = username
      .split(' ')
      .map(name => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase())
      .join(' ');
    try {
      // message.success(`Signed on as "${username}"`);
      this.props.deleteExpiredRoomsAction();
      this.props.onSetUsername(capitalUsername);
      message.success(`Signed on as "${capitalUsername}"`);
      this.setState({
        visible: false,
        username: '',
      });
    } catch (error) {
      // message.error('Fail to sign on!');
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
            <Icon type="login" /> Setting Your Name
          </div>
        }
        closable={false}
        visible={visible}
        onOk={this.handleOk}
        okText="Save"
        okButtonProps={{ disabled: !username }}
        cancelButtonProps={{ disabled: true }}
      >
        <Input
          placeholder="Please enter your username"
          prefix={<Icon type="user" />}
          suffix={suffix}
          value={username}
          onChange={this.onChangeUserName}
          onPressEnter={this.handleOk}
        />
      </Modal>
    );
  }
}

SignOnModal.propTypes = {
  onSetUsername: PropTypes.func.isRequired,
  deleteExpiredRoomsAction: PropTypes.func.isRequired,
  signedOn: PropTypes.bool,
};

const mapStateToProps = state => ({
  signedOn: !!state.login.username,
});
// Lowercasing username when dispatching, avoiding case-sensitive filtering
const mapDispatchToProps = dispatch => ({
  onSetUsername: data => dispatch(setUsername(data)),
  deleteExpiredRoomsAction: () => dispatch(deleteExpiredRoomsAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignOnModal);

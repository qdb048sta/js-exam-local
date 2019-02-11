import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { setUsername } from 'redux/login/actions';

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
    const hostings = [];
    try {
      localStorage.setItem('username', username);
      this.props.onSetUsername(username);

      localStorage.setItem('hostings', JSON.stringify(hostings));

      message.success(`Signed on as "${username}"`);
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
          onPressEnter={this.handleOk}
        />
      </Modal>
    );
  }
}

SignOnModal.propTypes = {
  onSetUsername: PropTypes.func.isRequired,
  signedOn: PropTypes.bool,
};

const mapStateToProps = state => ({
  signedOn: !!state.login.username,
});

const mapDispatchToProps = dispatch => ({
  onSetUsername: data => dispatch(setUsername(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignOnModal);

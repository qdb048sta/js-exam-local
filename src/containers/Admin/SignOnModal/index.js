import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { setUsername, setHostings } from 'redux/login/actions';

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
    try {
      //message.success(`Signed on as "${username}"`);
      this.props.onSetUsername(username);
      message.success(`Signed on as "${username}"`);
      this.setState({
        visible: false,
        username: '',
      });
    } catch (error) {
      //message.error('Fail to sign on!');
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
  onSetHostings: PropTypes.func.isRequired,
  signedOn: PropTypes.bool,
};

const mapStateToProps = state => ({
  signedOn: !!state.login.username,
});

const mapDispatchToProps = dispatch => ({
  onSetUsername: data => dispatch(setUsername(data)),
  onSetHostings: data => dispatch(setHostings(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignOnModal);

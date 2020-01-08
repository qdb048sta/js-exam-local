import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';

import injectReducer from 'utils/injectReducer';

import { Modal, Button, Input, message, Icon } from 'antd';

import { setRoomHost } from 'redux/room/actions';
import { REDUCER_KEY } from 'redux/createRoomModal/constants';
import { createRoomActions, createRoom } from 'redux/createRoomModal/actions';
import reducer from 'redux/createRoomModal/reducer';
import style from './CreateRoomModal.module.scss';

class CreateRoomModal extends React.PureComponent {
  state = {
    name: '',
    disabled: true,
  };

  constructor(props) {
    super(props);
    this.examLinkInput = React.createRef();
  }

  handleInputOnChange = e => {
    this.setState({
      name: e.target.value,
      disabled: e.target.value === '',
    });
  };

  handleOnOK = () => {
    const { name } = this.state;

    this.props.onCreateRoom({
      subjectId: name,
    });
  };

  handleOnAfterClose = () => {
    this.setState({
      name: '',
      disabled: true,
    });
    this.props.onReset();
  };

  copyLink = () => {
    this.examLinkInput.current.select();
    document.execCommand('copy');
    message.success('Link has been copied.');
  };

  toRoom = () => {
    this.handleOnAfterClose();
    const { history, createdRoomData, onSetRoomHost } = this.props;
    onSetRoomHost(true);
    history.push(`/admin/dispatch/${createdRoomData.id}`);
  };

  render() {
    const {
      visible,
      onClose,
      isCreatingRoom,
      createRoomSuc,
      createdRoomData,
    } = this.props;

    const { name, disabled } = this.state;

    let title = 'Create a room';
    let okButtonLabel = isCreatingRoom ? 'Creating...' : 'Create';
    let onOK = this.handleOnOK;

    if (createRoomSuc) {
      title = `Welcome to Room - ${createdRoomData.description}`;
      okButtonLabel = 'Enter Room';
      onOK = this.toRoom;
    }

    return (
      <Modal
        visible={visible}
        maskClosable={false}
        title={title}
        closable={!isCreatingRoom}
        okText={okButtonLabel}
        cancelButtonProps={{
          disabled: isCreatingRoom,
        }}
        okButtonProps={{
          disabled: disabled || isCreatingRoom,
        }}
        onOk={onOK}
        onCancel={onClose}
        afterClose={this.handleOnAfterClose}
      >
        {!createRoomSuc ? (
          <Input
            placeholder="Please enter Candidate name"
            prefix={<Icon type="user" />}
            value={name}
            onChange={this.handleInputOnChange}
          />
        ) : (
          <React.Fragment>
            <p>Candidate: {createdRoomData.subjectId}</p>
            <div className={style.content}>
              <Input
                size="large"
                readOnly
                value={`${window.location.origin}${
                  window.location.pathname
                }${window.location.hash.replace('admin', 'exam')}/${
                  createdRoomData.id
                }`}
                ref={this.examLinkInput}
              />
              <Button className={style.copyButton} onClick={this.copyLink}>
                <Icon type="copy" />
              </Button>
            </div>
          </React.Fragment>
        )}
      </Modal>
    );
  }
}

CreateRoomModal.propTypes = {
  visible: PropTypes.bool,
  history: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  onCreateRoom: PropTypes.func,
  onSetRoomHost: PropTypes.func,
  isCreatingRoom: PropTypes.bool,
  createRoomSuc: PropTypes.bool,
  createdRoomData: PropTypes.object,
};

const mapDispatchToProps = dispatch => ({
  onReset: () => dispatch(createRoomActions.reset()),
  onCreateRoom: data => dispatch(createRoom(data)),
  onSetRoomHost: data => dispatch(setRoomHost(data)),
});

const mapStateToProps = state => ({
  isCreatingRoom: state[REDUCER_KEY].createRoom,
  createRoomSuc: state[REDUCER_KEY].createRoomSuc,
  createdRoomData: state[REDUCER_KEY].createdRoomData,
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: REDUCER_KEY, reducer });

export default compose(withReducer, withConnect)(CreateRoomModal);

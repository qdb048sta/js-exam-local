import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { message } from 'antd';
import configureStore from 'redux/configureStore';
import * as actions from 'redux/createRoomModal/actions';
import ConnectedCreateRoomModal, { CreateRoomModal } from './index';

describe('<CreateRoomModal />', () => {
  let wrapper;
  let subject;
  let instance;
  let dispatch;
  const username = 'user name';
  const createdRoomData = {
    id: 'f509ee49-c4d6-4d3c-b357-2d18454b01f2',
    subjectId: 'test room 1',
    description: 'Z77',
    createTime: '2020-01-31T07:07:03.295Z',
    createTimeByDate: new Date(
      'Fri Jan 31 2020 15:07:03 GMT+0800 (Taipei Standard Time)',
    ),
  };
  const propsFromParent = {
    visible: true,
    onClose: jest.fn(),
    history: { push: jest.fn() },
  };

  describe('before create room success', () => {
    beforeAll(() => {
      window.location.href = '/#/admin';
    });
    beforeEach(() => {
      jest.resetAllMocks();
      const store = configureStore({});
      store.dispatch = jest.fn(action => action);
      const props = { ...propsFromParent };
      wrapper = mount(
        <Provider store={store}>
          <BrowserRouter>
            <ConnectedCreateRoomModal {...props} />
          </BrowserRouter>
        </Provider>,
      );
      subject = wrapper.find('CreateRoomModal');
      dispatch = wrapper.prop('store').dispatch;
    });

    it('should render', () => {
      expect(wrapper.length).toBeTruthy();
    });

    it('should render as snapshot', () => {
      expect(wrapper.html()).toMatchSnapshot();
      expect(subject.find('input').prop('placeholder')).toBe(
        'Please enter Candidate name',
      );
    });

    it('should handle user name input', () => {
      expect(subject.state()).toEqual({ name: '', disabled: true });
      const nameInput = subject.find('input');
      nameInput.simulate('change', { target: { value: username } });
      expect(subject.state()).toEqual({ name: username, disabled: false });
      nameInput.simulate('change', { target: { value: '' } });
      expect(subject.state()).toEqual({ name: '', disabled: true });
    });

    it('should handle ok', () => {
      jest.spyOn(actions, 'createRoom').mockImplementation(data => ({
        action: 'createRoom',
        ...data,
      }));
      subject.setState({ name: username, disabled: false });
      const CreateButton = subject.find('button').last();
      CreateButton.simulate('click');
      expect(dispatch).toBeCalledWith({
        action: 'createRoom',
        subjectId: username,
      });
    });

    it('should handle close', () => {
      const closeButton = subject.find('button').first();
      closeButton.simulate('click');
      expect(subject.prop('onClose')).toBeCalled();
      const cancelButton = subject.find('button').at(1);
      cancelButton.simulate('click');
      expect(subject.prop('onClose')).toBeCalledTimes(2);
    });
  });

  describe('after create room success', () => {
    beforeEach(() => {
      jest.resetAllMocks();
      dispatch = jest.fn(action => action);
      const stateProps = {
        isCreatingRoom: false,
        createRoomSuc: true,
        createdRoomData,
      };
      const dispatchProps = {
        onReset: jest.fn(),
        onCreateRoom: jest.fn(),
        onSetRoomHost: jest.fn(),
      };
      const props = {
        ...propsFromParent,
        ...stateProps,
        ...dispatchProps,
      };
      subject = mount(<CreateRoomModal {...props} />);
      subject.setState({ disabled: false, name: username });
      instance = subject.instance();
    });

    it('should render', () => {
      expect(subject.length).toBeTruthy();
    });

    it('should render as snapshot', () => {
      expect(subject.html()).toMatchSnapshot();
      expect(subject.find('p').text()).toBe('Candidate: test room 1');
    });

    it('should handle copy link', () => {
      document.execCommand = jest.fn();
      jest.spyOn(instance.examLinkInput.current, 'select');
      jest.spyOn(message, 'success');
      const copyLink = subject.find('input');
      expect(copyLink.prop('value')).toBe(
        `http://localhost/#/exam/${createdRoomData.id}`,
      );
      const copyLinkButton = subject.find('button.copyButton');
      copyLinkButton.simulate('click');
      expect(instance.examLinkInput.current.select).toBeCalled();
      expect(document.execCommand).toBeCalledWith('copy');
      expect(message.success).toBeCalledWith('Link has been copied.');
    });

    it('should handle enter room', () => {
      const handleOnAfterCloseSpy = jest
        .spyOn(instance, 'handleOnAfterClose')
        .mockImplementation(jest.fn());
      const { onSetRoomHost, history } = subject.props();
      const enterRoomButton = subject.find('button').last();
      enterRoomButton.simulate('click');
      expect(instance.handleOnAfterClose).toBeCalled();
      expect(onSetRoomHost).toBeCalledWith(true);
      expect(history.push).toBeCalledWith(
        `/admin/dispatch/${createdRoomData.id}`,
      );
      handleOnAfterCloseSpy.mockRestore();
    });

    it('should handle close', () => {
      const closeButton = subject.find('button').first();
      closeButton.simulate('click');
      expect(subject.prop('onClose')).toBeCalled();
      const cancelButton = subject.find('button').at(2);
      cancelButton.simulate('click');
      expect(subject.prop('onClose')).toBeCalledTimes(2);
    });

    it('should handle after close', () => {
      const onReset = subject.prop('onReset');
      instance.handleOnAfterClose();
      expect(subject.state()).toEqual({
        name: '',
        disabled: true,
      });
      expect(onReset).toBeCalled();
    });
  });
});

import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux/configureStore';
import { deleteRoomAction } from 'redux/room/actions';

import MainPage from './index';
import RoomList from './RoomList';
import CreateRoomModal from './CreateRoomModal';

jest.mock('./CreateRoomModal', () => jest.fn(() => <div>CreateRoomModal</div>));

jest.mock('./RoomList', () => jest.fn(() => <div>RoomList</div>));

jest.mock('aws-amplify-react', () => {
  const rooms = {
    items: [
      {
        id: 'f509ee49-c4d6-4d3c-b357-2d18454b01f2',
        subjectId: 'test room 1',
        description: 'Z77',
        createTime: '2020-01-31T07:07:03.295Z',
      },
      {
        id: 'f509ee49-c4d6-4d3c-b357-2d18454b01f2',
        subjectId: 'test room 1',
        description: 'Z77',
        createTime: '2020-01-31T07:07:03.295Z',
      },
      {
        id: 'c6f86538-3661-4cd3-a8e2-09578958bd39',
        subjectId: 'test room 2',
        description: 'V72',
        createTime: '2020-01-31T07:06:41.936Z',
      },
      {
        id: 'cfb2f8c4-8a2d-442d-a836-467be88a85f5',
        subjectId: 'test room 3',
        description: 'I87',
        createTime: '2020-02-13T06:24:08.206Z',
      },
    ],
  };
  const data = {
    listRooms: rooms,
    id: 'c6f86538-3661-4cd3-a8e2-09578958bd39',
  };
  const arg = { data, loading: false, mutatuion: jest.fn() };
  return {
    Connect: props => props.children(arg),
  };
});

jest.mock('redux/room/actions', () => ({
  deleteRoomAction: jest.fn(data => data),
}));

const rooms = [
  {
    id: 'cfb2f8c4-8a2d-442d-a836-467be88a85f5',
    subjectId: 'test room 3',
    description: 'I87',
    createTime: '2020-02-13T06:24:08.206Z',
    createTimeByDate: new Date('2020-02-13T06:24:08.206Z'),
  },
  {
    id: 'f509ee49-c4d6-4d3c-b357-2d18454b01f2',
    subjectId: 'test room 1',
    description: 'Z77',
    createTime: '2020-01-31T07:07:03.295Z',
    createTimeByDate: new Date('2020-01-31T07:07:03.295Z'),
  },
];

describe('<MainPage />', () => {
  let wrapper;
  let subject;
  let instance;
  let dispatch;
  const initialState = {
    searchKeyword: '',
    isModalVisible: false,
    delConfirmModalVisible: false,
    delRoom: null,
  };

  beforeEach(() => {
    jest.clearAllMocks();
    const store = configureStore({
      login: {
        username: 'user name',
        hostings: [],
      },
    });
    store.dispatch = jest.fn(action => action);
    const props = {
      history: {},
    };
    wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <MainPage {...props} />
        </BrowserRouter>
      </Provider>,
    );
    subject = wrapper.find('MainPage');
    instance = subject.instance();
    dispatch = wrapper.prop('store').dispatch;
  });

  it('should render properly', () => {
    expect(wrapper.length).toBeTruthy();
    expect(wrapper.html()).toMatchSnapshot();
    expect(subject.length).toBeTruthy();
    expect(subject.find('PageControlBar').length).toBeTruthy();
    expect(subject.find('Connect').length).toBe(2);
    expect(RoomList).toBeCalledWith(
      {
        hostings: [],
        rooms,
        signedOn: true,
        triggerDelRoom: expect.any(Function),
      },
      {},
    );
    expect(CreateRoomModal).toBeCalledWith(
      {
        visible: false,
        history: subject.prop('history'),
        onClose: instance.handleModalOnClose,
      },
      {},
    );
  });

  it('should handle on search', done => {
    jest.useRealTimers();
    jest.spyOn(instance, 'handleOnSearch');
    const searchInput = subject.find('input');
    searchInput.simulate('change', { target: { value: 'Test Room 1' } });
    expect(instance.handleOnSearch).toBeCalled();
    expect(subject.state()).toEqual(initialState);
    setTimeout(() => {
      expect(subject.state()).toEqual({
        ...initialState,
        searchKeyword: 'test room 1',
      });
      expect(RoomList).lastCalledWith(
        {
          hostings: [],
          rooms: [rooms[1]],
          signedOn: true,
          triggerDelRoom: expect.any(Function),
        },
        {},
      );
      done();
    }, 325);
  });

  it('should handle new modal button on click', () => {
    const spy = jest.spyOn(instance, 'handleNewModalButtonOnClick');
    instance.forceUpdate();
    const createRoomButton = subject.find('button');
    createRoomButton.simulate('click');
    expect(instance.handleNewModalButtonOnClick).toBeCalled();
    expect(subject.state()).toEqual({ ...initialState, isModalVisible: true });
    spy.mockRestore();
  });

  it('should handle modal on close', () => {
    subject.setState({ isModalVisible: true });
    instance.handleModalOnClose();
    expect(subject.state()).toEqual({ ...initialState, isModalVisible: false });
  });

  it('should handle hide delete confirm modal', () => {
    subject.setState({ delConfirmModalVisible: true });
    instance.hideDelConfirmModal();
    expect(subject.state()).toEqual({
      ...initialState,
      delConfirmModalVisible: false,
    });
  });

  it('should handle on ok del confirm modal', async () => {
    jest.spyOn(instance, 'hideDelConfirmModal');
    subject.setState({ delRoom: rooms[0] });
    await instance.handleOnOkDelConfirmModal();
    expect(deleteRoomAction).toBeCalledWith(rooms[0]);
    expect(dispatch).toBeCalledWith(rooms[0]);
    expect(instance.hideDelConfirmModal).toBeCalled();
  });

  it('should handle trigger del room', () => {
    const triggerDelRoom = RoomList.mock.calls[0][0].triggerDelRoom;
    triggerDelRoom(rooms[0]);
    expect(subject.state()).toEqual({
      ...initialState,
      delConfirmModalVisible: true,
      delRoom: rooms[0],
    });
  });

  it('should handle graphql subscription', () => {
    // onCreateRoomMsg might change the input array
    const testRooms = [...rooms];
    const onCreateRoomMsg = subject
      .find('Connect')
      .first()
      .prop('onSubscriptionMsg');
    let result = onCreateRoomMsg(
      { listRooms: { items: testRooms } },
      { onCreateRoom: { id: 'cfb2f8c4-8a2d-442d-a836-467be88a85f5' } },
    );
    expect(result.listRooms.items).toEqual(rooms);
    result = onCreateRoomMsg(
      { listRooms: { items: testRooms } },
      { onCreateRoom: { id: 'newId' } },
    );
    expect(result.listRooms.items).toEqual([{ id: 'newId' }, ...rooms]);

    const onDeleteRoomMsg = subject
      .find('Connect')
      .last()
      .prop('onSubscriptionMsg');
    result = onDeleteRoomMsg(rooms, { onDeleteRoom: { id: 'delId' } });
    expect(result).toEqual({ id: 'delId' });
  });

  it('should render properly when no data or error', () => {
    const aws = require('aws-amplify-react');
    aws.Connect = jest.fn(props =>
      props.children({
        data: { listRooms: { items: [] } },
        loading: false,
        mutatuion: jest.fn(),
      }),
    );
    subject.setState({});
    wrapper.update();
    let PageEmpty = wrapper.find('PageEmpty');
    expect(PageEmpty.length).toBeTruthy();
    expect(PageEmpty.text()).toBe('Room Not Found');

    aws.Connect = jest.fn(props =>
      props.children({
        data: { listRooms: { items: rooms } },
        error: 'error',
        loading: false,
        mutatuion: jest.fn(),
      }),
    );
    subject.setState({});
    wrapper.update();
    PageEmpty = wrapper.find('PageEmpty');
    expect(PageEmpty.length).toBeTruthy();
    expect(PageEmpty.text()).toBe('Error Occuring');
  });
});

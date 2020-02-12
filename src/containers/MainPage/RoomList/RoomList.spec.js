import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';

import RoomList from './index';

const fakeProps = {
  rooms: [
    {
      id: 'f509ee49-c4d6-4d3c-b357-2d18454b01f2',
      subjectId: 'test room 1',
      description: 'Z77',
      createTime: '2020-01-31T07:07:03.295Z',
      createTimeByDate: new Date(
        'Fri Jan 31 2020 15:07:03 GMT+0800 (Taipei Standard Time)',
      ),
    },
    {
      id: 'c6f86538-3661-4cd3-a8e2-09578958bd39',
      subjectId: 'test room 2',
      description: 'V72',
      createTime: '2020-01-31T07:06:41.936Z',
      createTimeByDate: new Date(
        'Fri Jan 31 2020 15:06:41 GMT+0800 (Taipei Standard Time)',
      ),
    },
  ],
  signedOn: true,
  hostings: ['f509ee49-c4d6-4d3c-b357-2d18454b01f2'],
  triggerDelRoom: jest.fn(),
};

describe('<RoomList />', () => {
  let subject;

  const setup = props =>
    mount(
      <BrowserRouter>
        <RoomList {...props} />
      </BrowserRouter>,
    );

  beforeEach(() => {
    jest.resetModules();
    jest.resetAllMocks();
    subject = setup(fakeProps);
  });

  it('should render', () => {
    expect(subject.length).toBeTruthy();
  });

  it('should render as snapshot', () => {
    expect(subject.html()).toMatchSnapshot();
    expect(subject.find('li').length).toEqual(2);
    expect(subject.find('button i.anticon-delete').length).toEqual(1);
  });

  it('should render properly when no data', () => {
    const props = Object.assign({}, fakeProps);
    delete props.rooms;
    subject = setup(props);
    expect(subject.html()).toMatchSnapshot();
  });

  it('should trigger triggerDelRoom function when click the delete button', () => {
    const delButton = subject.find('button i.anticon-delete');
    delButton.simulate('click');
    expect(subject.prop('children').props.triggerDelRoom).toBeCalledWith(
      subject.prop('children').props.rooms[0],
    );
  });
});

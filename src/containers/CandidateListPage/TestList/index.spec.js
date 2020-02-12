import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import { List } from 'antd';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import TestList from './index';
import * as deleteActionUtils from '../../../redux/test/actions';

describe('TestList index', () => {
  const tests = [
    {
      id: '9faebbd5-936e-4d3f-8345-ae63c100c9d7',
      subjectId: 'Zone',
      description: null,
      timeBegin: '2020-01-17T04:02:09.202Z',
      tags: ['Hank'],
    },
    {
      id: 'ea52ba9d-5d72-4ac2-8e22-ac4570264706',
      subjectId: 'testerror',
      description: null,
      timeBegin: '2020-01-17T02:35:53.776Z',
      tags: ['Kenny'],
    },
  ];

  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);
  const initialState = {};
  const testStore = mockStore(initialState);
  let wrapper;
  let list;
  let renderedItem;
  let deleteButton;

  function withProvider(component) {
    return mount(
      <Provider store={testStore}>
        <BrowserRouter>{component}</BrowserRouter>
      </Provider>,
    );
  }

  beforeAll(() => {
    localStorage.setItem('username', 'Kenny');
    wrapper = withProvider(<TestList data={tests} />);
    list = wrapper.find('TestList').instance();
    renderedItem = wrapper.find(List.Item.Meta);
    deleteButton = wrapper.find('.floatTop');
  });

  beforeEach(() => {
    testStore.clearActions();
    jest.clearAllMocks();
  });

  it('should render TestList', () => {
    expect(wrapper.render()).toMatchSnapshot();
    expect(renderedItem.length).toEqual(2);
    expect(deleteButton.length).toEqual(1);
  });

  it('should handleDeleteButton and hideDelConfirmModal properly', () => {
    deleteButton.simulate('click');
    expect(list.state.delConfirmModalVisible).toBeTruthy();
    expect(list.state.delTest).toEqual(tests[1]);
    list.hideDelConfirmModal();
    expect(list.state.delConfirmModalVisible).toBeFalsy();
  });

  it('should handleOnOkDelConfirmModal', async () => {
    jest.useFakeTimers();
    list.state.delTest = 'atest';
    const theMock = jest.fn(delTest => jest.fn());
    deleteActionUtils.deleteTestAction = theMock;

    const hideDelConfirmSpy = jest.spyOn(list, 'hideDelConfirmModal');
    await list.handleOnOkDelConfirmModal().catch();
    expect(hideDelConfirmSpy).toHaveBeenCalled();
    expect(list.state.delAnime).toBeTruthy();

    jest.advanceTimersByTime(550);
    await wrapper.update();
    expect(theMock).toHaveBeenCalledWith('atest');
    expect(list.state.delAnime).toBeFalsy();
  });
});

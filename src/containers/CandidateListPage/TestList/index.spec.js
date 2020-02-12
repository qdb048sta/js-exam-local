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
      tags: ['Ken'],
    },
  ];

  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);
  const initialState = {};
  const testStore = mockStore(initialState);

  function withProvider(component) {
    return mount(
      <Provider store={testStore}>
        <BrowserRouter>{component}</BrowserRouter>
      </Provider>,
    );
  }

  beforeEach(() => {
    testStore.clearActions();
    jest.clearAllMocks();
  });

  it('should render TestList', () => {
    localStorage.setItem('username', 'Ken');
    const wrapper = withProvider(<TestList data={tests} />);
    const renderedItem = wrapper.find(List.Item.Meta);
    const deleteButton = wrapper.find('.floatTop');
    expect(wrapper.render()).toMatchSnapshot();
    expect(renderedItem.length).toEqual(2);
    expect(deleteButton.length).toEqual(1);
  });

  it('should handleDeleteButton and hideDelConfirmModal properly', () => {
    localStorage.setItem('username', 'Arthur');
    const listItem = {
      id: '5d22073f-af1a-4548-8466-c918a59f9f4c',
      subjectId: 'at1420',
      description: null,
      timeBegin: '2020-02-05T06:20:31.030Z',
      tags: ['Arthur'],
    };
    const wrapper = withProvider(<TestList data={tests} />);
    const list = wrapper.find('TestList').instance();
    list.handleDeleteButton(listItem)();
    expect(list.state.delConfirmModalVisible).toBeTruthy();
    expect(list.state.delTest).toEqual(listItem);
    list.hideDelConfirmModal();
    expect(list.state.delConfirmModalVisible).toBeFalsy();
  });

  it('should handleOnOkDelConfirmModal', async () => {
    jest.useFakeTimers();
    const wrapper = withProvider(<TestList data={tests} />);
    const list = wrapper.find('TestList').instance();
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

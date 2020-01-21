import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import sinon from 'sinon';
import JavaScriptPage from '../../../../components/CodingView/JavaScript';
import * as runCodeUtils from '../../../../utils/runCode';

describe('Coding View Javascript index', () => {
  it('should render Javascript coding view properly', () => {
    const spy = sinon.spy(runCodeUtils, 'default');
    const element = mount(
      <BrowserRouter>
        <JavaScriptPage
          isExaming
          code="const a = 3;"
          compiledCode="const a = 3;"
          test="abcde"
          consoleMsg={['1', '2']}
          tape={['1']}
          handleCodeChange={jest.fn()}
          wrappedConsole={{}}
          resetConsole={jest.fn()}
          addTape={jest.fn()}
          resetTape={jest.fn()}
        />
      </BrowserRouter>,
    );
    expect(element.render()).toMatchSnapshot();
    expect(spy.calledOnce).toBeTruthy();
  });
});

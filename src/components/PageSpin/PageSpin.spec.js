import React from 'react';
import { mount } from 'enzyme';
import PageSpin from './index';

describe('Page Spinner', () => {
  it('should render a page spinner', () => {
    const spinnerWrapper = mount(<PageSpin spinning></PageSpin>);
    expect(spinnerWrapper).toMatchSnapshot();
    spinnerWrapper.unmount();
  });
});

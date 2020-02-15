import React from 'react';
import renderer from 'react-test-renderer';
import PageSpin from './index';

describe('Page Spinner', () => {
  it('should render a page spinner', () => {
    const SpinnerComponent = renderer
      .create(<PageSpin spinning></PageSpin>)
      .toJSON();
    expect(SpinnerComponent).toMatchSnapshot();
  });
});

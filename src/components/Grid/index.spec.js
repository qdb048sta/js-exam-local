import React from 'react';
import { mount } from 'enzyme';
import Grid from './index';

describe('Grid index spec', () => {
  const mockLayout = [
    {
      key: 'code',
      x: 0,
      y: 0,
      width: 647,
      height: 462,
      minWidth: 100,
      minHeight: 100,
      maxWidth: 700,
      maxHeight: 924,
    },
    {
      key: 'test',
      x: 0,
      y: 1,
      width: 647,
      height: 462,
      minWidth: 100,
      maxHeight: 700,
    },
    {
      key: 'tape',
      x: 1,
      y: 0,
      width: 647,
      height: 924,
      minWidth: 100,
      minHeight: 100,
      maxWidth: 700,
      maxHeight: 500,
    },
  ];
  it('should render Grid properly', () => {
    const element = mount(
      <Grid
        layout={mockLayout}
        totalWidth="100%"
        totalHeight="100%"
        autoResize
        borderSize={1}
      >
        {[<div key={0}>test</div>, <div key={1}>test2</div>]}
      </Grid>,
    );
    expect(element.render()).toMatchSnapshot();
  });
});

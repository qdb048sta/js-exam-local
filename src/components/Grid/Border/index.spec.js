import React from 'react';
import { mount } from 'enzyme';
import Border from './index';

describe('Border index spec', () => {
  it('should render border component properly', () => {
    const element = mount(
      <Border
        allowWidth
        allowHeight
        borderSize={1}
        width={1}
        height={10}
        maxHeight={10}
        minHeight={1}
        onUpdate={jest.fn()}
        disabled={false}
      />,
    );
    expect(element.render()).toMatchSnapshot();
  });
});

import { shallow } from 'enzyme';
import * as React from 'react';
import * as sinon from 'sinon';

import Button from './Button';

describe('Button', () => {
  const onButtonClick = sinon.spy();
  const buttonContent = 'Get werkin';
  const wrapper = shallow(
    <Button
      name={buttonContent}
      onClick={onButtonClick}
    >
      {buttonContent}
    </Button>,
  );

  it('renders with content', () => {
    expect(wrapper.text()).toEqual(buttonContent);
  });

  it('simulates click events', () => {
    wrapper.simulate('click');
    expect(onButtonClick).toHaveProperty('callCount', 1);
  });
});

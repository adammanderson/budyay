import { mount } from 'enzyme';
import * as React from 'react';

import { BigHeading, MediumHeading, SmallHeading, Text } from '.';

describe('Typography', () => {
  const textContent = 'Accelerate your career with the power of mentorship';

  it('renders Big Heading with content', () => {
    const wrapper = mount(<BigHeading>{textContent}</BigHeading>);

    expect(wrapper.text()).toEqual(textContent);
  });

  it('renders Medium Heading with content', () => {
    const wrapper = mount(<MediumHeading>{textContent}</MediumHeading>);

    expect(wrapper.text()).toEqual(textContent);
  });

  it('renders Small Heading with content', () => {
    const wrapper = mount(<SmallHeading>{textContent}</SmallHeading>);

    expect(wrapper.text()).toEqual(textContent);
  });

  it('renders Text with content', () => {
    const wrapper = mount(<Text>{textContent}</Text>);

    expect(wrapper.text()).toEqual(textContent);
  });
});

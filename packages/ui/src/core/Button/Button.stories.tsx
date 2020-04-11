import { action } from '@storybook/addon-actions';
import { select, text, withKnobs } from '@storybook/addon-knobs';
import * as React from 'react';

import { Button } from '.';

export default {
  title: 'Core/Button',
  decorators: [withKnobs],
};

export const buttons = (): React.ReactElement => {
  return (
    <Button
      name="Credits"
      onClick={action('clicked')}
      variant={select('Variant', ['default', 'secondary', 'outline'], 'default')}
    >
      {text('Label', 'Find a buddy initiative')}
    </Button>
  );
};

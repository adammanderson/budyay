import * as React from 'react';
import { addDecorator, addParameters, configure } from '@storybook/react';
import { create } from '@storybook/theming';
import { Box } from 'theme-ui';
import ThemeProvider from '../src/core/ThemeProvider';

addParameters({
  options: {
    theme: create({
      brandTitle: 'Tallo UI',
    }),
    showRoots: true,
  },
});

addDecorator((Story) => (
  <ThemeProvider>
    <Box sx={{ p: 4 }}>
      <Story />
    </Box>
  </ThemeProvider>
));

configure(require.context('../src', true, /\.stories\.tsx$/), module);

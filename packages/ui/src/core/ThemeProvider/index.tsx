import * as React from 'react';
import { ThemeProvider as ThemeUIProvider } from 'theme-ui';
import theme from '../../theme';

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider = ({
  children,
}: ThemeProviderProps): React.ReactElement => (
  <ThemeUIProvider theme={theme}>
    {children}
  </ThemeUIProvider>
);

export default ThemeProvider;

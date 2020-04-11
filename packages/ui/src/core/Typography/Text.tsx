/** @jsx jsx */
import * as React from 'react';
import { jsx, Text as TText } from 'theme-ui';
import { TypographyProps } from '.';
import styles from './styles';

const Text = ({
  children,
  as = 'p',
  variant = 'default',
  extendStyle,
}: TypographyProps): React.ReactElement => (
  <TText
    as={as}
    sx={{...styles.text[variant], ...extendStyle}}
  >
    {children}
  </TText>
);

export default Text;

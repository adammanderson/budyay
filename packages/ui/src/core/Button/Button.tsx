/** @jsx jsx */
import * as React from 'react';
import { jsx, Button as TButton } from 'theme-ui';
import { ButtonProps } from '.';
import styles from './styles';

const Button = ({
  children,
  disabled,
  onClick,
  name,
  type = 'button',
  variant = 'default',
}: ButtonProps): React.ReactElement => (
  <TButton
    type={type}
    onClick={onClick}
    aria-label={name}
    disabled={disabled}
    sx={{
      ...styles.button,
      ...styles.variants[variant],
    }}
  >
    {children}
  </TButton>
);

export default Button;

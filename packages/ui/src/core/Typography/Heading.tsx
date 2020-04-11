/** @jsx jsx */
import * as React from 'react';
import { jsx, Heading } from 'theme-ui';
import { TypographyProps } from '.';
import styles from './styles';

export const HugeHeading = ({
  children,
  as = 'h1',
  extendStyle,
}: TypographyProps): React.ReactElement => (
  <Heading
    as={as}
    sx={{ ...styles.hugeHeading, ...extendStyle }}
  >
    {children}
  </Heading>
);

export const BigHeading = ({
  children,
  as = 'h2',
  extendStyle,
}: TypographyProps): React.ReactElement => (
  <Heading
    as={as}
    sx={{ ...styles.bigHeading, ...extendStyle }}
  >
    {children}
  </Heading>
);

export const MediumHeading = ({
  children,
  as = 'h3',
  extendStyle,
}: TypographyProps): React.ReactElement => (
  <Heading
    as={as}
    sx={{ ...styles.mediumHeading, ...extendStyle }}
  >
    {children}
  </Heading>
);

export const SmallHeading = ({
  children,
  as = 'h4',
  extendStyle,
}: TypographyProps): React.ReactElement => (
  <Heading
    as={as}
    sx={{ ...styles.smallHeading, ...extendStyle }}
  >
    {children}
  </Heading>
);

import { Theme } from 'theme-ui';
import breakpoints from './breakpoints';
import colors from './colors';
import fonts from './fonts';
import styles from './styles';

const theme: Theme = {
  space: [
    '0',
    '0.25em',
    '0.5em',
    '0.8em',
    '1.5em',
    '2em',
    '4em',
  ],
  lineHeights: {
    body: '1.5em',
    heading: '1.3em',
  },
  letterSpacings: {
    body: 'normal',
    caps: '0.2em',
  },
  radii: [0, 5, 10, 20, 30],
  borders: [
    '0',
    `1px solid ${colors.border}`,
  ],
  shadows: [
    'none',
    '0 2px 10px rgba(63, 61, 86, 10%)',
  ],
  zIndices: {
    hide: -1,
    auto: 'auto',
    base: 0,
    docked: 10,
    dropdown: 1000,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    toast: 1700,
    tooltip: 1800,
  },
  breakpoints,
  colors,
  ...fonts,
  styles,
};

export default theme;

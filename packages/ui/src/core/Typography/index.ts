import { SxStyleProp } from 'theme-ui';

export * from './Heading';
export { default as Text } from './Text';

export interface TypographyProps {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p';
  extendStyle?: SxStyleProp;
  variant?: 'default' | 'small' | 'tiny';
}

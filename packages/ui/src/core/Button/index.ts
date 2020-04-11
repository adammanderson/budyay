export { default as Button } from './Button';

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  name: string;
  disabled?: boolean;
  variant?: 'default' | 'secondary' | 'outline' | 'icon';
  type?: 'button' | 'submit';
}

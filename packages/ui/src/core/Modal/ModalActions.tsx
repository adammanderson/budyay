/** @jsx jsx */
import * as React from 'react';
import { jsx } from 'theme-ui';
import styles from './styles';

interface ModalActionsProps {
  children: React.ReactNode;
}

const ModalActions = ({
  children,
}: ModalActionsProps): React.ReactElement => (
  <div sx={styles.actions}>
    {children}
  </div>
);

export default ModalActions;

/** @jsx jsx */
import * as React from 'react';
import { jsx } from 'theme-ui';
import { motion } from 'framer-motion';
import { ModalProps } from '.';
import styles from './styles';

const Modal = ({
  children,
}: ModalProps): React.ReactElement => (
  <div sx={styles.wrapper}>
    <motion.div
      sx={styles.background}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.5 }}
    />
    <motion.div
      sx={styles.inner}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: [0.215, 0.61, 0.355, 1], duration: 0.8 }}
    >
      {children}
    </motion.div>
  </div>
);

export default Modal;

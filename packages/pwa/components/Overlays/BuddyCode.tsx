import * as React from 'react';
import { Flex, Box } from 'theme-ui';
import {
  Button,
  Modal,
  ModalActions,
  MediumHeading,
  Text,
} from '@budyay/ui';
import { OverlayProps } from '.';

const Logout = ({
  handleClose,
}: OverlayProps): React.ReactElement => {
  return (
    <Modal>
      <Flex sx={{ alignItems: 'center' }}>
        <Box>
          <MediumHeading>Let’s get started on buddying you up</MediumHeading>
          <Text>
            Enter a buddy code provided by a host of a buddy initiative.
          </Text>
          <ModalActions>
            <Button name="cancel" variant="outline" onClick={handleClose}>Cancel</Button>
            <Button name="continue" onClick={handleClose}>Continue</Button>
          </ModalActions>
        </Box>
      </Flex>
    </Modal>
  );
};

export default Logout;

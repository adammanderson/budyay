import * as React from 'react';
import { Container, Box, Flex } from 'theme-ui';
import {
  Button,
  HugeHeading,
  Brand,
  Text,
} from '@budyay/ui';

const Home: React.SFC = () => (
  <Container sx={{ py: 6, px: 4 }}>
    <Box sx={{ pb: 4 }}>
      <Brand />
    </Box>
    <HugeHeading>
      Connecting buddies to nurture, support, and encourage one another.
    </HugeHeading>
    <Text>
      It all starts with an initiative - a mentoring programme at your organisation, a regular
      team retrospective, or a public initative to offer support in your neighbourhood.
    </Text>
    <Flex sx={{ flexDirection: 'column' }}>
      <Button
        name="find_initiative"
      >
        Find an initiative
      </Button>
      <Button
        variant="outline"
        name="buddy_code"
      >
        I have a buddy code
      </Button>
    </Flex>
  </Container>
);

export default Home;

import * as React from 'react';
import { useRouter } from 'next/router';
import { Container, Box, Flex } from 'theme-ui';
import {
  Button,
  HugeHeading,
  Brand,
  Text,
} from '@budyay/ui';

const Home: React.SFC = () => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <Container>
      <Box sx={{
        p: 5,
        pt: 6,
      }}
      >
        <Brand size={90} />
        <HugeHeading extendStyle={{ pt: 2 }}>
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
            onClick={(): Promise<boolean> => router.push({ pathname, query: { overlay: 'buddyCode' } })}
          >
            I have a buddy code
          </Button>
        </Flex>
      </Box>
    </Container>
  );
};

export default Home;

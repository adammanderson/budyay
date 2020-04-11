import * as React from 'react';

import {
  HugeHeading,
  BigHeading,
  MediumHeading,
  SmallHeading,
  Text,
} from '.';


export default { title: 'Core/Typography' };

export const headings = (): React.ReactElement => (
  <>
    <HugeHeading>Logic is the beginning of wisdom</HugeHeading>
    <BigHeading>Logic is the beginning of wisdom</BigHeading>
    <MediumHeading>Logic is the beginning of wisdom</MediumHeading>
    <SmallHeading>Logic is the beginning of wisdom</SmallHeading>
    <Text>
      It all starts with an initiative - a mentoring programme at your organisation, a regular team
      retrospective, or a public initative to offer support in your neighbourhood.
    </Text>
    <Text variant="small">
      It all starts with an initiative - a mentoring programme at your organisation, a regular team
      retrospective, or a public initative to offer support in your neighbourhood.
    </Text>
    <Text variant="tiny">
      It all starts with an initiative - a mentoring programme at your organisation, a regular team
      retrospective, or a public initative to offer support in your neighbourhood.
    </Text>
  </>
);

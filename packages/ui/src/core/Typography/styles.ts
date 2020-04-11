const heading = {
  m: 0,
  mb: 2,
  color: 'heading',
  fontWeight: 'bold',
};

const hugeHeading = {
  ...heading,
  fontSize: 7,
};

const bigHeading = {
  ...heading,
  fontSize: 6,
};

const mediumHeading = {
  ...heading,
  fontSize: 5,
};

const smallHeading = {
  ...heading,
  fontSize: 4,
};

const baseText = {
  mb: 3,
  fontSize: 0,
  lineHeight: '1.6em',
  ':last-of-type': {
    mb: 0,
  },
};

const text = {
  default: baseText,
  small: {
    ...baseText,
    fontSize: 2,
  },
  tiny: {
    ...baseText,
    fontSize: 1,
  },
};

export default {
  bigHeading,
  hugeHeading,
  mediumHeading,
  smallHeading,
  text,
};

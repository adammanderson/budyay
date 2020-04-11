const heading = {
  m: 0,
  mb: 3,
  color: 'heading',
  fontWeight: 'bold',
  lineHeight: '1.3em',
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
  mb: 5,
  fontSize: 0,
  lineHeight: '1.7em',
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

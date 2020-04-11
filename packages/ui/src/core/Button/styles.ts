const button = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  px: 4,
  py: 3,
  mb: 3,
  fontSize: 0,
  fontFamily: 'body',
  fontWeight: 'bold',
  lineHeight: '1.1em',
  color: 'text',
  bg: 'primary',
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: 'transparent',
  borderRadius: 5,
  boxShadow: 1,
  cursor: 'pointer',
  outline: 'none',
  transition: 'all 100ms ease-in-out 0s',
  userSelect: 'none',
  ':disabled': {
    bg: 'border',
    cursor: 'progress',
  },
};

const variants = {
  secondary: {
    color: 'white',
    bg: 'secondary',
    '&:hover': {
      bg: 'text',
    },
  },
  outline: {
    color: 'text',
    bg: 'background',
    borderColor: 'primary',
    '&:hover': {
      borderColor: 'secondary',
    },
  },
  icon: {
    px: 2,
  },
};

export default {
  button,
  variants,
};

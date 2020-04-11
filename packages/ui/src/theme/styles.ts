export default {
  root: {
    bg: 'background',
    fontFamily: 'body',
    fontSize: 0,
    lineHeight: 'body',
    fontWeight: 'body',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
  },
  '::-webkit-scrollbar-track': {
    boxShadow: 'none',
  },
  '::-webkit-scrollbar': {
    maxHeight: '150px',
    minHeight: '20px',
    width: '6px',
  },
  '::-webkit-scrollbar-thumb': {
    bg: 'primary',
    borderRadius: 1,
  },
};

const wrapper = {
  position: 'absolute' as 'absolute',
  top: 0,
  left: 0,
  display: 'flex',
  alignItems: ['auto', 'center'],
  justifyContent: 'center',
  height: '100vh',
  width: '100vw',
  zIndex: 'modal' as any,
};

const background = {
  position: 'absolute' as 'absolute',
  height: '100vh',
  width: '100vw',
  bg: 'rgba(229, 229, 236, 90%)',
};

const inner = {
  display: 'flex',
  p: 5,
  width: ['100%', 'auto'],
  maxWidth: ['none', '600px'],
  bg: 'background',
  zIndex: 'modal' as any,
  boxShadow: 1,
  overflow: 'auto',
};

const actions = {
  mt: 4,
  display: 'flex',
  justifyContent: 'space-between',
};

export default {
  wrapper,
  background,
  inner,
  actions,
};

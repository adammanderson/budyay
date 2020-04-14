import * as React from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';
import { removeUrlParam } from '@budyay/utils';


const overlays = {
  buddyCode: dynamic(() => import('./BuddyCode')),
};

const GlobalOverlays = (): React.ReactElement => {
  const router = useRouter();
  const [overlayVisible, setOverlayVisible] = React.useState(false);

  const { query: { overlay }, asPath, pathname } = router;
  const overlayKey = overlay && overlay.toString();
  const activeOverlay = overlays[overlayKey];

  const handleEscapeOverlay = (): void => {
    setOverlayVisible(false);
    setTimeout(() => {
      const newUrl = removeUrlParam('overlay', asPath);
      router.push(pathname, newUrl, { shallow: true });
    }, 500);
  };

  React.useEffect(() => {
    if (activeOverlay) {
      setOverlayVisible(true);
    }
  }, [overlayKey, activeOverlay]);

  if (!activeOverlay) return null;

  return (
    <AnimatePresence>
      { overlayVisible && (
        <motion.div
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {React.createElement(
            activeOverlay,
            { handleClose: (): void => handleEscapeOverlay() },
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GlobalOverlays;

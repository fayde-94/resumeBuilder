import { useState, useEffect } from 'react';

type ViewportSize = {
  width: number | undefined;
  height: number | undefined;
};

const useViewport = (): ViewportSize => {
  const [viewportSize, setViewportSize] = useState<ViewportSize>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setViewportSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Set the initial size
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up event listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return viewportSize;
};

export default useViewport;

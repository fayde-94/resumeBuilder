import { useState, useEffect } from "react";

export function useContainerSize(ref: React.RefObject<HTMLDivElement>): {
  width: number;
  height: number;
} {
  const [size, setSize] = useState({ width: 643, height: 927 });

  useEffect(() => {
    function updateSize() {
      if (ref.current) {
        setSize({
          width: ref.current.offsetWidth,
          height: ref.current.offsetHeight,
        });
      } else {
        setSize({
          width: 643,
          height: 927,
        });
      }
    }

    updateSize();

    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, [ref]);

  return size;
}

export function calculateSize(
  percentage: string,
  containerSize: { width: number; height: number }
): string {
  const percentageValue = parseFloat(percentage) / 100;
  const computedSize =
    Math.min(containerSize.width, containerSize.height) * percentageValue;
  return `${computedSize}px`;
}

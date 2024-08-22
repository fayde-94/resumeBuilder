import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface FlippingNumbersProps {
  targetValue: number;
  className?: string;
}

const FlippingNumbers: React.FC<FlippingNumbersProps> = ({
  targetValue,
  className,
}) => {
  const [currentValue, setCurrentValue] = useState<number>(0);
  //   current.children.0.innerText

  useEffect(() => {
    if (currentValue !== targetValue) {
      const interval = setInterval(() => {
        setCurrentValue((prev) => {
          const remaining = Math.abs(targetValue - prev);
          let increment = Math.ceil(remaining * 0.2); // Default increment: 10% of remaining value

          if (remaining <= targetValue * 0.03) {
            // Apply more aggressive speed decay when within 10% of the target
            increment = Math.ceil(remaining * 0.02); // Increase or decrease by 2% of remaining value
          }

          // Ensure we do not overshoot the target value
          const nextValue =
            prev < targetValue
              ? Math.min(prev + increment, targetValue)
              : Math.max(prev - increment, targetValue);

          // Stop interval if we've reached the target value
          if (nextValue === targetValue) {
            clearInterval(interval);
          }

          return nextValue;
        });
      }, 50); // Initial delay for updates
      return () => clearInterval(interval);
    }
  }, [currentValue, targetValue]);

  return (
    <motion.div className=" flex m-0 p-0 pr-1 w-max">
      {currentValue
        .toString()
        .split("")
        .map((digit, index) => (
          <motion.div
            key={index}
            variants={anim_c}
            initial={"initial"}
            animate={digit ? "animate" : "initial"}
            style={{
              display: "inline-flex",
            }}
            className={className}
          >
            {digit}
          </motion.div>
        ))}
    </motion.div>
  );
};

const anim_c = {
  initial: { scaleY: 0, opacity: 0 },
  animate: {
    scaleY: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 200, mass: 1.2 },
  },
};

export default FlippingNumbers;

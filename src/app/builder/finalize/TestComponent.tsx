"use client";

import {
  calculateSize,
  useContainerSize,
} from "@/components/hooks/useContainerSize";
import React, { useRef } from "react";

const TestComponent: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const containerSize = useContainerSize(containerRef);

  const fontSize = calculateSize("5%", containerSize);
  const textSM = calculateSize("5%", containerSize);
  const textMD = calculateSize("5%", containerSize);
  const textBASE = calculateSize("5%", containerSize);
  const textXL = calculateSize("5%", containerSize);
  const text2XL = calculateSize("5%", containerSize);
  const lineHeight = calculateSize("6%", containerSize); // Adjust as necessary
  const marginBottom = calculateSize("2%", containerSize); // Adjust as necessary

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        aspectRatio: "1000 / 1400" /* Adjust to your template's ratio */,
      }}
      className="p-10 flex flex-row brd max-w-max "
    >
      <div>
        <h1 style={{ fontSize, lineHeight, marginBottom }}>Title</h1>
        <p style={{ fontSize: textSM }} className="text-sm brd">
          text-sm
        </p>
        <p style={{}} className="text-base brd">
          text-base
        </p>
        <p style={{}} className="text-md brd">
          text-md
        </p>
        <p style={{}} className="text-xl brd">
          text-xl
        </p>
        <p style={{}} className="text-2xl brd">
          text-2xl
        </p>
      </div>
      <div>
        <h1 style={{ fontSize, lineHeight, marginBottom }}>Title</h1>
        <p className=" brd text-sm">text-sm</p>
        <p className=" brd text-base">text-base</p>
        <p className=" brd text-md">text-md</p>
        <p className=" brd text-xl">text-xl</p>
        <p className=" brd text-2xl">text-2xl</p>
      </div>
      {/* Add more text elements as needed */}
    </div>
  );
};

export default TestComponent;

"use client";
import React from "react";
import { HoverBorderGradient } from "./border-gradient";

export function AnimBorder() {
  return (
    <div className="m-40 flex  justify-center text-center">
      <HoverBorderGradient
        containerClassName="rounded-lg"
        as="button"
        className="  flex items-center space-x-2"
      ></HoverBorderGradient>
    </div>
  );
}

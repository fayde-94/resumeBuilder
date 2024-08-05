"use client";
import { useTextStore } from "@/lib/Zustand";
import React from "react";
import { HexColorPicker } from "react-colorful";

const ColorPicker = () => {
  const { setField, accentColor } = useTextStore();
  console.log("🚀 ~ ColorPicker ~ accentColor:", accentColor);
  return (
    <div className="page p-4 space-y-2 max-w-max">
      <HexColorPicker
        color={accentColor}
        onChange={(e) => setField("accentColor", e)}
      />
      <button
        className=" p-2 bg-slate-700 rounded-lg"
        onClick={() => setField("accentColor", "#075985")}
      >
        reset color
      </button>
    </div>
  );
};

export default ColorPicker;

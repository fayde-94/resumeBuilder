"use client";
import { useTextStore } from "@/lib/Zustand";
import React from "react";
import { HexColorPicker } from "react-colorful";
import { Slider } from "./slider";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Customize = () => {
  const presetColors = [
    "#1c2025",
    "#94365c",
    "#1a2e49",
    "#78412b",
    "#1b5f85",
    "#1f4623",
  ];
  const calculatePfpPercentage = (pfpsize: any) => {
    const pfp = Number(pfpsize);
    const calculated = (pfp / 1100) * 100;
    return `${calculated}%`;
  };

  const { setField, accentColor, pfpSize } = useTextStore();
  return (
    <div className="page ">
      <div className="w-full relative">
        <h2 className=" font-light  text-center leading-none text-2xl p-4 pt-10 rounded-t-lg bg-gradient-to-t from-zinc-900/60 to-transparent capitalize">
          Customize your resume
        </h2>
        <p className="absolute right-0 bottom-0 p-4 text-sm text-sky-800"></p>
        <div className="w-full border-t-[3px] rounded-full border-t-sky-800"></div>
      </div>
      <div className=" w-full mb-10 max-w-[950px] sm:p-4 p-2 gap-2 sm:gap-4 bg-zinc-900/60 rounded-b-lg shadow-md ">
        <Accordion type="single" collapsible className="">
          <AccordionItem value="color-picker" className=" w-full">
            <AccordionTrigger className=" gap-x-2 w-full min-w-full text-right text-md text-sky-700  ">
              Adjust Image Size
            </AccordionTrigger>
            <AccordionContent className="pt-3 text-base font-light min-w-full">
              <Slider
                className=""
                defaultValue={[250]}
                min={200}
                max={300}
                onValueChange={(e) => {
                  setField("pfpSize", {
                    px: e.toString() + "px",
                    percent: calculatePfpPercentage(e),
                  });
                }}
              />

              <p className="pt-2 text-slate-600 text-sm">{pfpSize.px}</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="size-slider" className=" w-full">
            <AccordionTrigger className=" gap-x-2 w-full min-w-full text-right text-md text-sky-700  ">
              Change Accent color
            </AccordionTrigger>
            <AccordionContent className="pt-3 text-base font-light min-w-full">
              <div className="w-full flex color-picker gap-2">
                <HexColorPicker
                  color={accentColor}
                  className=" "
                  onChange={(e) => setField("accentColor", e)}
                />
                <div className=" flex flex-wrap content-center max-w-28 gap-2">
                  {presetColors.map((presetColor) => (
                    <button
                      key={presetColor}
                      className="size-12 rounded-lg"
                      style={{ background: presetColor }}
                      onClick={() => setField("accentColor", presetColor)}
                    />
                  ))}
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Customize;

"use client";
import Field from "@/components/ui/Field";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { useTextStore } from "@/lib/Zustand";
import { monthsArray, numsOnly } from "@/lib/utils";

const Education = () => {
  const { setField, education } = useTextStore();
  console.log("🚀 ~ Education ~ education gradmonth:", education?.gradMonth);

  return (
    <div className="page">
      <div className="w-full relative">
        <h2 className=" font-light  text-center leading-none text-2xl p-4 pt-10 rounded-t-lg bg-gradient-to-t from-zinc-900/60 to-transparent capitalize">
          Education
        </h2>
        <p className="absolute right-0 bottom-0 p-4 text-sm text-sky-800"></p>
        <div className="w-full border-t-[3px] rounded-full border-t-sky-800"></div>
      </div>

      <div className="flex justify-around w-full  ">
        <div className="grid grid-cols-2 w-full max-w-[950px] sm:p-4 p-2 gap-2 sm:gap-4 bg-zinc-900/60 rounded-b-lg shadow-md ">
          <div className=" col-span-1">
            <Field
              className="capitalize"
              value={education?.degree}
              title="Graduation Degree"
              placeholder="Science Degree"
              onChange={(e) =>
                setField("education", { ...education, degree: e.target.value })
              }
            />
          </div>
          <div className=" col-span-1">
            {/* field */}
            <Field
              className="capitalize"
              value={education?.school}
              title="School Name"
              placeholder="IT & Sciences School"
              onChange={(e) =>
                setField("education", { ...education, school: e.target.value })
              }
            />
          </div>

          <Popover>
            <PopoverTrigger tabIndex={-1} className="w-full col-span-1">
              <Field
                className="capitalize"
                value={education?.gradMonth}
                title="Month"
                placeholder="June"
                onChange={(e) =>
                  setField("education", {
                    ...education,
                    gradMonth: e.target.value,
                  })
                }
              ></Field>
            </PopoverTrigger>
            <PopoverContent className="px-0 py-0 gap-0 space-x-0 border-[#181e2f]/90 space-y-0 m-0 bg-[#181e2f]/90 border max-w-max">
              <div className="grid grid-cols-3  p-2">
                {monthsArray.map((m, i: number) => (
                  <Button
                    key={i}
                    onClick={() =>
                      setField("education", {
                        ...education,
                        gradMonth: m,
                      })
                    }
                    className="months hover:bg-slate-600 transition-all duration-300"
                  >
                    {m.slice(0, 3)}
                  </Button>
                ))}
              </div>
            </PopoverContent>
          </Popover>
          <div className=" col-span-1">
            {/* field */}
            <Field
              type="string"
              className="capitalize"
              value={education.gradYear}
              title="Year"
              placeholder="2021"
              onChange={(e) =>
                setField("education", {
                  ...education,
                  gradYear: numsOnly(e.target.value),
                })
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;

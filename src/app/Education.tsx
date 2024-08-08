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
      <div className="w-full">
        <Accordion
          type="single"
          collapsible
          className="p-4 pt-10 pb-0 rounded-t-lg bg-gradient-to-t from-zinc-900/60 to-transparent"
        >
          <h2 className="font-semibold text-center leading-none text-2xl">
            Education
          </h2>
          <AccordionItem
            value="item-1"
            className="flex flex-col  items-end pb-0"
          >
            <AccordionTrigger className=" gap-x-2 pt-0 pb-2 text-xs text-sky-700 max-w-max ">
              Expand Tips
            </AccordionTrigger>
            <AccordionContent className="pt-3 text-base font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
              distinctio nobis doloribus consectetur nulla maxime rerum
              consequuntur, suscipit ipsam ad impedit praesentium repellat earum
              quidem nam? Iusto error quibusdam dicta sunt fugit minima,
              suscipit esse nesciunt molestiae, veniam repellendus voluptate
              alias deleniti, nam reprehenderit reiciendis doloremque! Minima
              dignissimos illo consequatur nulla quaerat iusto? Eius non
              praesentium dolore nihil quis soluta unde itaque iusto,
              reprehenderit eveniet natus sunt exercitationem. Dolores,
              obcaecati corporis doloribus libero facilis exercitationem nostrum
              debitis fuga distinctio porro! Ad, voluptatum? Corporis
              consectetur praesentium voluptas quasi ipsa, ut laboriosam
              perspiciatis beatae enim excepturi officiis assumenda autem!
              Commodi, quis aut.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="w-full border-t-[3px] rounded-full border-t-sky-800"></div>
      </div>

      <div className="flex justify-around w-full space-x-10 ">
        <div className="grid grid-cols-2  gap-y-10 w-full max-w-[950px] sm:p-4 p-2 gap-2 sm:gap-4 bg-zinc-900/60 rounded-b-lg shadow-md ">
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

          <div className=" col-span-1 ">
            <Popover>
              <PopoverTrigger className="w-full">
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
          </div>
          <div className=" col-span-1">
            {/* field */}
            <Field
              type="string"
              className="capitalize"
              value={education?.gradYear}
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
          <div className="text-white">
            <div className="w-full flex flex-wrap gap-4"></div>
          </div>
          <div className="text-white">
            <div className="w-full flex flex-wrap gap-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;

"use client";
import Field from "@/components/ui/Field";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { useTextStore } from "@/lib/Zustand";
import { monthsArray, numsOnly } from "@/lib/utils";
import { FaSquarePlus, FaSquareXmark } from "react-icons/fa6";

const Languages = () => {
  const [value, setvalue] = useState("");
  const { languages, setLanguage, addLanguage, removeLanguage } =
    useTextStore();
  console.log("🚀 ~ Languages ~ languages:", languages);

  const handleAddLanguage = () => {
    addLanguage();
  };

  const handleRemoveLanguage = (index: number) => {
    removeLanguage(index);
  };

  const handleSetLanguage = (index: number, lang: string, prof: string) => {
    setLanguage(index, { lang, prof });
  };

  return (
    <div className="page">
      <div className="w-full relative">
        <h2 className=" font-light  text-center leading-none text-2xl p-4 pt-10 rounded-t-lg bg-gradient-to-t from-zinc-900/60 to-transparent">
          Languages
        </h2>
        <p className="absolute right-0 bottom-0 p-4 text-sm text-sky-800">
          Not Required
        </p>
        <div className="w-full border-t-[3px] rounded-full border-t-sky-800"></div>
      </div>

      <div className="flex justify-around w-full  ">
        <div className="grid grid-cols-2 w-full max-w-[950px] sm:p-4 p-2 gap-2 sm:gap-4 bg-zinc-900/60 rounded-b-lg shadow-md ">
          {languages?.map((set, index: number) => (
            <div
              key={index}
              className="w-full grid-cols-2 grid col-span-2 max-w-[950px]  gap-2 sm:gap-4"
            >
              <div className=" col-span-1">
                <Field
                  className="capitalize"
                  value={languages[index]?.lang}
                  title="Language"
                  placeholder="English"
                  onChange={(e) =>
                    setLanguage(index, {
                      ...languages[index],
                      lang: e.target.value,
                    })
                  }
                />
              </div>
              <div className=" col-span-1">
                <div className=" flex flex-col sm:text-lg text-sm  ">
                  <h2 className=" self-start pb-1 ">
                    Proficiency:<span className="text-sky-400"> *</span>
                  </h2>

                  <div className="p-[.1rem] rounded-2xl focus: radialbig relative">
                    <Select
                      onValueChange={(value) =>
                        setLanguage(index, { ...languages[index], prof: value })
                      }
                    >
                      <SelectTrigger className="w-[180px] field focus-visible:ring-0 border-0 focus-visible:outline-none focus-visible:border-0">
                        <SelectValue
                          placeholder={
                            languages[index].prof || "Select Level..."
                          }
                        />
                      </SelectTrigger>
                      <SelectContent className="">
                        <SelectItem className="captialize" value="Novice">
                          Novice
                        </SelectItem>
                        <SelectItem className="captialize" value="Decent">
                          Decent
                        </SelectItem>
                        <SelectItem className="captialize" value="Professional">
                          Professional
                        </SelectItem>
                        <SelectItem className="captialize" value="Fluent">
                          Fluent
                        </SelectItem>
                        <SelectItem className="captialize" value="Native">
                          Native
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div
            className={`w-full flex items-center pt-1 ${
              languages.length >= 1 ? " justify-between" : "justify-end"
            } col-span-2`}
          >
            {languages.length >= 1 ? (
              <>
                <Button
                  variant={"none"}
                  onClick={() => handleRemoveLanguage(languages.length - 1)}
                  className="p-0 bg-transparent text-slate-700 hover:text-destructive hover:bg-transparent group hover:underline transition-all duration-300 focus-visible:underline "
                >
                  <FaSquareXmark className="size-[1.5rem] fill-slate-800 group-hover:fill-destructive  transition-all duration-500" />
                  <p className=" pl-1 text-base"> Remove</p>
                </Button>
              </>
            ) : (
              ""
            )}
            <Button
              onClick={handleAddLanguage}
              variant={"none"}
              className="p-0 bg-transparent text-slate-700 hover:text-sky-800 hover:bg-transparent group hover:underline transition-all duration-300 focus-visible:underline"
            >
              <p className=" pr-1 text-base"> Add Language</p>
              <FaSquarePlus className="size-[1.5rem] fill-slate-800  group-hover:fill-sky-800 transition-all duration-500" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Languages;

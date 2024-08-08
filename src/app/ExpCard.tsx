import { Button } from "@/components/ui/button";
import Field from "@/components/ui/Field";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import AutoResizeTextarea from "@/components/ui/TextareaResizing";
import { monthsArray, numsOnly } from "@/lib/utils";
import { useTextStore } from "@/lib/Zustand";
import React from "react";
type props = {
  count: number;
};

const ExpCard = ({ count = 0 }: props) => {
  const { experience, setExperience } = useTextStore();
  return (
    <div className=" flex flex-col sm:text-lg text-sm ">
      <div className="w-full grid grid-cols-4 gap-2 sm:gap-4">
        <div className="col-span-2">
          <Field
            title="Job Position"
            placeholder="Meme Manager"
            value={experience[count]?.jobPosition || ""}
            onChange={(e) =>
              setExperience(count, "jobPosition", e.target.value)
            }
          />
        </div>
        <div className=" col-span-2">
          <Field
            title="Employer"
            placeholder="Some Company"
            value={experience[count]?.employer || ""}
            onChange={(e) => setExperience(count, "employer", e.target.value)}
          />
        </div>
        <Popover>
          <PopoverTrigger className="w-full">
            <Field
              className="capitalize"
              value={experience[count]?.startMonth || ""}
              title="Start Month"
              placeholder="June"
              onChange={(e) =>
                setExperience(count, "startMonth", e.target.value)
              }
            ></Field>
          </PopoverTrigger>
          <PopoverContent className="px-0 py-0 gap-0 space-x-0 border-[#181e2f]/90 space-y-0 m-0 bg-[#181e2f]/90 border max-w-max">
            <div className="grid grid-cols-3  p-2">
              {monthsArray.map((m, i: number) => (
                <Button
                  key={i}
                  onClick={() => setExperience(count, "startMonth", m)}
                  className="months hover:bg-slate-600 transition-all duration-300"
                >
                  {m.slice(0, 3)}
                </Button>
              ))}
            </div>
          </PopoverContent>
        </Popover>
        <Field
          type="string"
          title="Start Year"
          placeholder="2011"
          value={experience[count]?.startYear || ""}
          onChange={(e) =>
            setExperience(count, "startYear", numsOnly(e.target.value))
          }
        />
        <Popover>
          <PopoverTrigger className="w-full">
            <Field
              className="capitalize"
              value={experience[count]?.endMonth || ""}
              title="End Month"
              placeholder="October"
              onChange={(e) => setExperience(count, "endMonth", e.target.value)}
            ></Field>
          </PopoverTrigger>
          <PopoverContent className="px-0 py-0 gap-0 space-x-0 border-[#181e2f]/90 space-y-0 m-0 bg-[#181e2f]/90 border max-w-max">
            <div className="grid grid-cols-3  p-2">
              {monthsArray.map((m, i: number) => (
                <Button
                  key={i}
                  onClick={() => setExperience(count, "endMonth", m)}
                  className="months hover:bg-slate-600 transition-all duration-300"
                >
                  {m.slice(0, 3)}
                </Button>
              ))}
            </div>
          </PopoverContent>
        </Popover>

        <Field
          type="string"
          title="End Year"
          placeholder="2016"
          value={experience[count]?.endYear || ""}
          onChange={(e) =>
            setExperience(count, "endYear", numsOnly(e.target.value))
          }
        />
      </div>
      <div className="flex flex-col gap-4  pt-4">
        <div className="p-[.1rem] rounded-2xl radialbig">
          <AutoResizeTextarea
            value={experience[count]?.bullet1 || ""}
            onChange={(e) => setExperience(count, "bullet1", e.target.value)}
            placeholder="Bullet Point 1"
            className="focus-visible:ring-0 textarea  min-h-24"
          />
        </div>

        <div className="p-[.1rem] rounded-2xl radialbig">
          <AutoResizeTextarea
            value={experience[count]?.bullet2 || ""}
            onChange={(e) => setExperience(count, "bullet2", e.target.value)}
            placeholder="Bullet Point 2"
            className="focus-visible:ring-0 textarea  min-h-24"
          />
        </div>
        <div className="p-[.1rem] rounded-2xl radialbig">
          <AutoResizeTextarea
            value={experience[count]?.bullet3 || ""}
            onChange={(e) => setExperience(count, "bullet3", e.target.value)}
            placeholder="Bullet Point 3"
            className="focus-visible:ring-0 textarea  min-h-24"
          />
        </div>
      </div>
    </div>
  );
};

export default ExpCard;

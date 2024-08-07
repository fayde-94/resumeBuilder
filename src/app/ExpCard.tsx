import Field from "@/components/ui/Field";
import { Textarea } from "@/components/ui/textarea";
import { numsOnly } from "@/lib/utils";
import { useTextStore } from "@/lib/Zustand";
import React from "react";
type props = {
  count: number;
};

const ExpCard = ({ count = 0 }: props) => {
  console.log("🚀 ~ ExpCard ~ count:", count);
  const { experience, setExperience } = useTextStore();
  return (
    <div className=" flex flex-col sm:text-lg text-sm  ">
      <div className="w-full grid grid-cols-4 gap-4">
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
        <Field
          title="Start Month"
          placeholder="June"
          value={experience[count]?.startMonth || ""}
          onChange={(e) => setExperience(count, "startMonth", e.target.value)}
        />
        <Field
          type="string"
          title="Start Year"
          placeholder="2011"
          value={experience[count]?.startYear || ""}
          onChange={(e) =>
            setExperience(count, "startYear", numsOnly(e.target.value))
          }
        />
        <Field
          title="End Month"
          placeholder="October"
          value={experience[count]?.endMonth || ""}
          onChange={(e) => setExperience(count, "endMonth", e.target.value)}
        />
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
          <Textarea
            value={experience[count]?.bullet1 || ""}
            onChange={(e) => setExperience(count, "bullet1", e.target.value)}
            placeholder="Bullet Point 1"
            className="focus-visible:ring-0 field  min-h-24"
          />
        </div>

        <div className="p-[.1rem] rounded-2xl radialbig">
          <Textarea
            value={experience[count]?.bullet2 || ""}
            onChange={(e) => setExperience(count, "bullet2", e.target.value)}
            placeholder="Bullet Point 2"
            className="focus-visible:ring-0 field  min-h-24"
          />
        </div>
        <div className="p-[.1rem] rounded-2xl radialbig">
          <Textarea
            value={experience[count]?.bullet3 || ""}
            onChange={(e) => setExperience(count, "bullet3", e.target.value)}
            placeholder="Bullet Point 3"
            className="focus-visible:ring-0 field  min-h-24"
          />
        </div>
      </div>
    </div>
  );
};

export default ExpCard;

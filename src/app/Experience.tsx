import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FaSquareXmark } from "react-icons/fa6";

import Field from "@/components/ui/Field";
import { Textarea } from "@/components/ui/textarea";
import { useTextStore } from "@/lib/Zustand";
import { Button } from "@/components/ui/button";
import { RiAddBoxFill } from "react-icons/ri";
import { numsOnly } from "@/lib/utils";
import ExpCard from "./ExpCard";

const Experience = () => {
  const { experience, setExperience } = useTextStore();
  console.log("🚀 ~ Experience ~ experience:", experience);
  const [counter, setcounter] = useState<number[]>([0]);
  console.log("🚀 ~ Experience ~ counter:", counter);
  const handleAddCount = () => {
    setcounter((prevCounter) => [
      ...prevCounter,
      prevCounter[prevCounter.length - 1] + 1,
    ]);
  };
  const handleRemoveCount = () => {
    setcounter((prevCounter) =>
      prevCounter.length > 1 ? prevCounter.slice(0, -1) : prevCounter
    );
  };

  return (
    <div className="page">
      <div className="w-full">
        <Accordion
          type="single"
          collapsible
          className="p-4 pt-10 pb-0 rounded-t-lg bg-gradient-to-t from-zinc-900/60 to-transparent"
        >
          <h2 className="font-semibold text-center leading-none text-2xl">
            Professional experience
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
        <div className="space-y-8 w-full max-w-[950px] sm:p-4 p-2 gap-2 sm:gap-4 bg-zinc-900/60 rounded-b-lg shadow-md ">
          {/* <ExpCard count={counter[0]} /> */}
          {counter.map((count) => (
            <div className="w-full flex gap-4 flex-col">
              <p className="text-sky-800">experience {count + 1}</p>
              <ExpCard count={counter[count]} />
            </div>
          ))}

          <div className="w-full flex items-center justify-between pt-4">
            <div>
              {counter.length > 1 ? (
                <Button
                  onClick={handleRemoveCount}
                  className="p-0 bg-transparent text-slate-700 hover:text-sky-800 hover:bg-transparent group hover:underline"
                >
                  <FaSquareXmark className="size-10 fill-slate-800  group-hover:fill-sky-800" />
                  <p className=" pl-1 text-base"> Remove Field</p>
                </Button>
              ) : (
                ""
              )}
            </div>
            <Button
              onClick={handleAddCount}
              variant={"none"}
              className="p-0 bg-transparent text-slate-700 hover:text-sky-800 hover:bg-transparent group hover:underline"
            >
              <p className=" pr-1 text-base"> Add Another Field</p>
              <RiAddBoxFill className="size-11 fill-slate-800  group-hover:fill-sky-800" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

const addFields = (value: number) => {
  return <h2>cock</h2>;
};

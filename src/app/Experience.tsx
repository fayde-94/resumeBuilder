import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FaSquareXmark, FaSquarePlus } from "react-icons/fa6";

import { useTextStore } from "@/lib/Zustand";
import { Button } from "@/components/ui/button";
import ExpCard from "./ExpCard";

const Experience = () => {
  const { experience, removeExperience, counterArray, addCount, removeCount } =
    useTextStore();
  console.log("🚀 ~ Experience ~ experience:", experience);
  console.log("🚀 ~ Experience ~ counterArray:", counterArray);

  const handleAddCount = () => {
    if (counterArray.length >= 2) {
      return;
    }
    addCount();
  };
  const handleRemoveCount = () => {
    removeCount();
    removeExperience(counterArray.length - 1);
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
            Experience
          </h2>
          <AccordionItem
            value="item-1"
            className="flex flex-col  items-end pb-0"
          >
            <AccordionTrigger className=" gap-x-2 pt-0 pb-2 text-xs text-sky-700 max-w-max ">
              Expand Tips
            </AccordionTrigger>
            <AccordionContent className="pt-3">
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
        <div className=" w-full max-w-[950px] sm:p-4 p-2 gap-2 sm:gap-4 bg-zinc-900/60 rounded-b-lg space-y-4 shadow-md ">
          {/* <ExpCard count={counter[0]} /> */}
          {counterArray.map((count) => (
            <div key={count + "82w2"} className="w-full flex gap-4 flex-col">
              <p className="text-sky-800">experience {count + 1}</p>
              <ExpCard count={counterArray[count]} />
            </div>
          ))}

          <div className="w-full flex items-center justify-end pt-4">
            {counterArray.length > 1 ? (
              <Button
                variant={"none"}
                onClick={handleRemoveCount}
                className="p-0 bg-transparent text-slate-700 hover:text-destructive hover:bg-transparent group hover:underline transition-all duration-500"
              >
                <p className=" pr-1 text-base"> Remove Experience</p>
                <FaSquareXmark className="size-[1.5rem] fill-slate-800 group-hover:fill-destructive  transition-all duration-500" />
              </Button>
            ) : (
              <Button
                onClick={handleAddCount}
                variant={"none"}
                className="p-0 bg-transparent text-slate-700 hover:text-sky-800 hover:bg-transparent group hover:underline transition-all duration-500"
              >
                <p className=" pr-1 text-base"> Additional Experience</p>
                <FaSquarePlus className="size-[1.5rem] fill-slate-800  group-hover:fill-sky-800 transition-all duration-500" />
              </Button>
            )}
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

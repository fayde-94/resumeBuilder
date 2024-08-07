import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Field from "@/components/ui/Field";
import { Textarea } from "@/components/ui/textarea";
import { useTextStore } from "@/lib/Zustand";

const Summary = () => {
  const { summary, setField } = useTextStore();
  return (
    <div className="page">
      <div className="w-full">
        <Accordion
          type="single"
          collapsible
          className="p-4 pt-10 pb-0 rounded-t-lg bg-gradient-to-t from-zinc-900/60 to-transparent"
        >
          <h2 className="font-semibold text-center leading-none text-2xl">
            Professional Summary
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
        <div className="gap-y-10 w-full max-w-[950px] sm:p-4 p-2 gap-2 sm:gap-4 bg-zinc-900/60 rounded-b-lg shadow-md ">
          <div className=" flex flex-col sm:text-lg text-sm  ">
            <h2 className=" self-start pb-1 ">
              Summary <span className="text-sky-400"> *</span>
            </h2>

            {/* <h3
              className={`self-start text-slate-500 sm:text-sm pb-1 text-xs`}
            ></h3> */}

            <div className="p-[.1rem] rounded-2xl radialbig">
              <Textarea
                value={summary}
                onChange={(e) => setField("summary", e.target.value)}
                placeholder="a brief snapshot of who you are"
                className="focus-visible:ring-0 field  min-h-40"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;

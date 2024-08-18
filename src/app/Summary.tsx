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
import TipsCard from "@/components/ui/TipsCard";
import AutoResizeTextarea from "@/components/ui/TextareaResizing";

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
          <h2 className=" font-light  text-center leading-none text-2xl">
            Summary
          </h2>
          <AccordionItem
            value="item-1"
            className="flex flex-col  items-end pb-0"
          >
            <AccordionTrigger className=" gap-x-2 pt-0 pb-2 text-xs text-sky-700 max-w-max ">
              Expand Tips
            </AccordionTrigger>
            <AccordionContent className="pt-3 text-base font-light">
              <TipsCard
                head="An overview of who you are, and your achievements as it relates to work."
                p1="Pay careful attention to correct grammar when filling your resume, resumes with typos or bad grammar will usually lead to immediate disqualification."
                p2="Place a magnifying glass on your expertise, your strengths and capabilities, phrase your summary in a way to capture the interest of the reader, as hiring managers will only spend seconds deciding if your resume is worth further reading."
                p3={[
                  "Points to hit in this section:",
                  "Who am I?: My values, my previous job experience.",
                  "Why hire me?: My strengths and expertise on the job.",
                ]}
              />
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="w-full border-t-[3px] rounded-full border-t-sky-800"></div>
      </div>
      <div className="flex justify-around w-full space-x-10">
        <div className="gap-y-10 w-full max-w-[950px] sm:p-4 p-2 gap-2 sm:gap-4 bg-zinc-900/60 rounded-b-lg shadow-md ">
          <div className=" flex flex-col sm:text-lg text-sm pb-1">
            <h2 className=" self-start pb-1 ">
              Summary <span className="text-sky-400"> *</span>
            </h2>

            {/* <h3
              className={`self-start text-slate-500 sm:text-sm pb-1 text-xs`}
            ></h3> */}

            <AutoResizeTextarea
              value={summary}
              onChange={(e) => setField("summary", e.target.value)}
              placeholder="a brief snapshot of who you are"
              className="focus-visible:ring-0 textarea "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;

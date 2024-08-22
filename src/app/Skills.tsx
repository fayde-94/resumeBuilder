"use client";
import Field from "@/components/ui/Field";
import TipsCard from "@/components/ui/TipsCard";
import { useTextStore } from "@/lib/Zustand";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HoverBorderGradient } from "@/components/ui/border-gradient";

const Skills = () => {
  const { technicalSkills, personalSkills, setField } = useTextStore();
  const [techInput, settechInput] = useState("");
  const [persInput, setpersInput] = useState("");

  const handleAddTechnicalSkill = () => {
    if (technicalSkills !== undefined) {
      if (techInput && !technicalSkills?.includes(techInput)) {
        setField("technicalSkills", [...technicalSkills, techInput]);
        settechInput("");
      }
    }
  };
  const handleRemoveTechnicalSkill = (skillToRemove: string) => {
    if (technicalSkills !== undefined) {
      setField(
        "technicalSkills",
        technicalSkills?.filter((skill) => skill !== skillToRemove)
      );
    }
  };

  const handleAddPersonalSkill = () => {
    if (personalSkills !== undefined) {
      if (persInput && !personalSkills?.includes(persInput)) {
        setField("personalSkills", [...personalSkills, persInput]);
        setpersInput("");
      }
    }
  };
  const handleRemovePersonalSkill = (skillToRemove: string) => {
    if (personalSkills !== undefined) {
      setField(
        "personalSkills",
        personalSkills?.filter((skill) => skill !== skillToRemove)
      );
    }
  };

  return (
    <div className="page">
      <div className="w-full">
        <Accordion
          type="single"
          collapsible
          className="p-4 pt-10 pb-0 rounded-t-lg bg-gradient-to-t from-zinc-900/60 to-transparent"
        >
          <h2 className=" font-light  text-center leading-none text-2xl">
            Skills
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
                head="An important part of your resume listing your skill in your given field."
                p1={[
                  "Try tailoring your resume for the desired job position, targetted resumes that address over half the job requirements have a much greater chance of leaving a strong impression.",
                ]}
                p2={[
                  "Don't neglect the impact of personal skills, research suggests over 50% of emplyers place a high value on skills such as:",
                  "Time management, Communication skills, Critical thinking and Problem solving.",
                ]}
                p3="Try listing only the most relevant skills to the job, an average of 4-7 skills in each of the two categories, depending on your skills and position needs."
              />
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="w-full border-t-[3px] rounded-full border-t-sky-800"></div>
      </div>
      <div className="flex justify-around w-full space-x-10 ">
        <div className="grid grid-cols-2  gap-y-10 w-full max-w-[950px] sm:p-4 p-2 gap-2 sm:gap-4 bg-zinc-900/60 rounded-b-lg shadow-md ">
          <div className=" col-span-1">
            <Field
              submitButton
              submitButtonOnclick={handleAddTechnicalSkill}
              required
              value={techInput}
              subtext="Hard Skills"
              placeholder="Enter to submit"
              title="Technical Skills"
              onChange={(e) => settechInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleAddTechnicalSkill();
                }
              }}
            />
          </div>
          <div className=" col-span-1">
            <Field
              submitButton
              submitButtonOnclick={handleAddPersonalSkill}
              required
              value={persInput}
              subtext="Soft Skills"
              placeholder="Enter to submit"
              title="Personal Skills"
              onChange={(e) => setpersInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleAddPersonalSkill();
                }
              }}
            />
          </div>
          <div className="text-white">
            <div className="w-full flex flex-wrap gap-4">
              {technicalSkills?.map((skill, index) => (
                <HoverBorderGradient
                  containerClassName="border-0 p-0"
                  className=" border-0 p-0"
                  duration={1}
                  key={index}
                >
                  <div
                    onClick={() => handleRemoveTechnicalSkill(skill)}
                    className="py-3 px-6 cursor-pointer relative hover:bg-slate-800 transition-all group duration-300 shadow-md bg-[#101728]/90 rounded-full w-max"
                  >
                    <p className=" select-none uppercase  sm:text-base text-sm text-neutral-300">
                      {skill}
                    </p>
                    <div className="absolute size-4 origin-center bg-red-600 rounded-full right-[-5%] top-[-10%] scale-0 group-hover:scale-100 duration-300 transition-all"></div>
                  </div>
                </HoverBorderGradient>
              ))}
            </div>
          </div>
          <div className="text-white">
            <div className="w-full flex flex-wrap gap-4">
              {personalSkills?.map((skill, index) => (
                <HoverBorderGradient
                  containerClassName="border-0 p-0"
                  className=" border-0 p-0"
                  duration={1}
                  key={index}
                >
                  <div
                    onClick={() => handleRemovePersonalSkill(skill)}
                    className="px-6 py-3 cursor-pointer relative hover:bg-slate-800 transition-all group duration-300 shadow-md bg-[#101728]/90 rounded-full w-max"
                  >
                    <p className=" select-none uppercase sm:text-base text-sm text-neutral-300">
                      {skill}
                    </p>
                    <div className="absolute size-4 origin-center bg-red-600 rounded-full right-[-5%] top-[-10%] scale-0 group-hover:scale-100 duration-300 transition-all"></div>
                  </div>
                </HoverBorderGradient>
              ))}
            </div>
          </div>
          <div className="flex items-end select-none text-neutral-700 row-span-2">
            {(technicalSkills !== undefined && technicalSkills.length > 0) ||
            (personalSkills !== undefined && personalSkills.length > 0) ? (
              <div className="pt-4 text-sm text-slate-700">
                <p>Click the skill to remove</p>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

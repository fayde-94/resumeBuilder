"use client";
import T1 from "@/components/resume_templates/t1";
import { Button } from "@/components/ui/button";
import Field from "@/components/ui/Field";
import TipsCard from "@/components/ui/TipsCard";
import generatePdf from "@/lib/generatePDF";
import { useTextStore } from "@/lib/Zustand";
import { useState } from "react";
import { IoCloseCircle } from "react-icons/io5";

const SkillsPage = () => {
  const texts = useTextStore();
  const { technicalSkills, personalSkills, setField } = useTextStore();
  console.log("🚀 ~ page ~ personalSkills:", personalSkills);
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
    <div className="page ">
      <h2 className="font-semibold leading-none text-3xl mb-10"> Skills</h2>
      <div className="flex justify-around w-full space-x-10 ">
        <TipsCard
          title="Contact Info Tips"
          head="The headliner of your resume containing your basic information and
          means of contact."
          p1="Social Media
          profiles like LinkedIn are becoming increasingly important for
          companies looking to hire you, over 25% of hiring managers will be
          factoring that into their hiring strategy."
          p2="Your Web
          Portfolio will have significant impact on your chances of getting
          hired, it is where you can showcase your skillset and the results of
          your hard work."
        />
        <div className="grid grid-cols-2 gap-4 w-full max-w-[950px] p-4 bg-slate-200/60  rounded-lg shadow-md min-h-[664px] shadow-slate-700/30">
          <div className=" col-span-1">
            <Field
              value={techInput}
              placeholder="One skill at a time then click enter"
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
              value={persInput}
              placeholder="One skill at a time then click enter"
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
                <div
                  key={index}
                  onClick={() => handleRemoveTechnicalSkill(skill)}
                  className="py-3 px-6 cursor-pointer relative hover:bg-slate-800 transition-all group duration-300 bg-sky-800 rounded-lg w-max shadow-md shadow-slate-700/40"
                >
                  <p className=" select-none uppercase">{skill}</p>
                  <div className="absolute size-4 origin-center bg-red-600 rounded-full right-[-5%] top-[-10%] scale-0 group-hover:scale-100 duration-300 transition-all"></div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-white">
            <div className="w-full flex flex-wrap gap-4">
              {personalSkills?.map((skill, index) => (
                <div
                  key={index}
                  onClick={() => handleRemovePersonalSkill(skill)}
                  className="py-3 px-6 cursor-pointer relative hover:bg-slate-800 transition-all group duration-300 bg-cyan-800 rounded-lg w-max shadow-md shadow-slate-700/40"
                >
                  <p className=" select-none uppercase">{skill}</p>
                  <div className="absolute size-4 origin-center bg-red-600 rounded-full right-[-5%] top-[-10%] scale-0 group-hover:scale-100 duration-300 transition-all"></div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-end select-none text-neutral-400 row-span-2">
            {(technicalSkills !== undefined && technicalSkills.length > 0) ||
            (personalSkills !== undefined && personalSkills.length > 0) ? (
              <div className="pt-4">
                <p>Click the skill to remove</p>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <Button className=" px-8 py-6 text-xl place-self-end mx-4 rounded-lg shadow-md shadow-slate-700/40">
        Next
      </Button>
    </div>
  );
};

export default SkillsPage;

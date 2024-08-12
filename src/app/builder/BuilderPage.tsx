"use client";

import PuppeteerTemplate from "@/components/resume_templates/puppeteerTemplate";
import Customize from "@/components/ui/Customize";
import { useTextStore } from "@/lib/Zustand";
import Contact from "../Contact";
import UploadPFP from "@/components/UploadPFP";
import Summary from "../Summary";
import Skills from "../Skills";
import Experience from "../Experience";
import Education from "../Education";
import PdfGeneratorButton from "../templates/generateBtn";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const BuilderPage = () => {
  const { accentColor } = useTextStore();

  return (
    <div className="w-full min-h-screen relative">
      <Disclaimer />
      <div className="flex flex-row h-screen mx-auto max-w-max ">
        <div className="flex flex-col w-full pb-10 ">
          <Contact />
          <UploadPFP />
          <Summary />
          <Skills />
          <Experience />
          <Education />
          <Customize />
          <div className="2xl:px-2 px-0 py-0 -mt-10 flex justify-end w-full ">
            <Link
              href={"/builder/finalize"}
              className="  text-base text-center text-black bg-sky-600 px-4 mb-10 py-2 rounded-lg"
            >
              Finalize Resume
            </Link>
          </div>
        </div>

        <div className=" hidden 2xl:flex  origin-top-left aspect-[1000/1440] relative">
          <div className="fixed hidden 2xl:flex mt-8 ml-12 origin-top-left aspect-[1000/1440]">
            <div
              style={{ boxShadow: `20px 20px 50px ${accentColor}70` }}
              className=" overflow-clip mb-2"
            >
              <PuppeteerTemplate className="max-w-[1000px] min-h-[94vh]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Disclaimer = () => {
  return (
    <div className="fixed bottom-0 pointer-events-none select-none right-0 bg-yellow-800/20 rounded-lg p-4">
      <pre className="capitalize text-center text-sm whitespace-pre-line text-slate-400">
        site <br /> under <br /> construction
        <hr className="bg-red-400 border-amber-600" />
      </pre>
    </div>
  );
};

export default BuilderPage;

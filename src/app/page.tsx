"use client";

import Contact from "./Contact";
import Skills from "./Skills";
import PuppeteerTemplate from "@/components/resume_templates/puppeteerTemplate";
import UploadPFP from "../components/UploadPFP";
import Customize from "@/components/ui/Customize";
import Education from "./Education";
import { useTextStore } from "@/lib/Zustand";
import Summary from "./Summary";
import Experience from "./Experience";
import PdfGeneratorButton from "./templates/generateBtn";

export default function Home() {
  const { accentColor } = useTextStore();
  return (
    <div className="w-full min-h-screen relative">
      <Disclaimer />
      <div className="flex flex-row h-screen mx-auto max-w-max ">
        <div className="flex flex-col  w-full pb-10 ">
          <Contact />
          <UploadPFP />
          <Summary />
          <Skills />
          <Experience />
          <Education />
          <Customize />
          <PdfGeneratorButton />
          {/* <Upload /> */}
        </div>
        <div className=" hidden 2xl:flex  origin-top-left aspect-[1000/1440] relative">
          <div className="fixed  scale-[.6] hidden 2xl:flex pt-16 pl-12 origin-top-left aspect-[1000/1440]">
            <div
              style={{ boxShadow: `20px 20px 50px ${accentColor}70` }}
              className=" border-2 border-slate-300 rounded-xl overflow-clip mb-2"
            >
              <PuppeteerTemplate />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

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

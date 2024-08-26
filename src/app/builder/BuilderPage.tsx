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
import { Link } from "next-view-transitions";
import { EdgeStoreProvider } from "@/lib/edgestore";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";
import BasicTemplate from "@/components/resume_templates/BasicTemplate";

const BuilderPage = () => {
  const { accentColor } = useTextStore();

  return (
    <div className="w-full min-h-screen relative">
      {/* <Disclaimer /> */}
      <div className="flex flex-row h-screen mx-auto max-w-max ">
        <div className="flex flex-col w-full pb-10 ">
          <Contact />

          <EdgeStoreProvider>
            <UploadPFP />
          </EdgeStoreProvider>
          <Summary />
          <Skills />
          <Experience />
          <Education />
          <Customize />
          <div className="2xl:px-2 px-1 py-0 -mt-10 flex justify-end w-full ">
            <Link
              href={"/builder/finalize"}
              className="  text-base text-center text-black bg-sky-600 px-4 mb-10 py-2 rounded-lg"
            >
              Finalize Resume
            </Link>
          </div>
        </div>

        <div className=" hidden 2xl:flex origin-top-left aspect-[1000/1440] relative">
          <div className="fixed aspect-[1000/1440] max-w-[710px]">
            <Carousel className="max-w-[1100px] w-full mx-auto h-full max-h-screen px-2">
              <CarouselContent className="max-w-[100vw] h-screen p-0 m-0 ">
                {/* two column template */}
                <CarouselItem
                  key={"caro1"}
                  className="p-0 m-0 flex flex-col items-center justify-center "
                >
                  <p className="text-center pb-2 text-slate-400 capitalize">
                    two column template
                  </p>
                  <motion.div
                    initial={{ height: "99%" }}
                    whileInView={{ height: "100%" }}
                    style={{ boxShadow: `10px 10px 28px ${accentColor}70` }}
                    className="aspect-[1000/1440]  flex flex-col justify-center min-h-[80vh] mx-auto max-h-[86vh]  max-w-full rounded-md overflow-clip select-none"
                  >
                    <PuppeteerTemplate />
                  </motion.div>
                </CarouselItem>
                {/* basic template */}
                <CarouselItem
                  key={"caro2"}
                  className="p-0 m-0 flex flex-col items-center justify-center "
                >
                  <p className="text-center pb-2 text-slate-400 capitalize">
                    classic template
                  </p>
                  <motion.div
                    initial={{ height: "99%" }}
                    style={{ boxShadow: `10px 10px 28px ${accentColor}70` }}
                    whileInView={{ height: "100%" }}
                    className="aspect-[1000/1440]  flex flex-col justify-center min-h-[80vh] mx-auto max-h-[86vh] max-w-full rounded-md overflow-clip select-none"
                  >
                    <BasicTemplate />
                  </motion.div>
                </CarouselItem>

                {/* more soon */}
                <CarouselItem className="p-0 m-0 flex flex-col items-center justify-center ">
                  <motion.div
                    initial={{ scale: 0.1 }}
                    transition={{ duration: 0.5 }}
                    whileInView={{ scale: 1 }}
                    className="aspect-[1000/1440]  flex flex-col justify-center min-h-[80vh] mx-auto max-h-[86vh] max-w-full "
                  >
                    <p className="max-w-max mx-auto">
                      more templates coming soon
                    </p>
                  </motion.div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="size-10 left-0 m-0 hover:bg-sky-900 bg-slate-800/80 disabled:bg-black/50" />
              <CarouselNext className="size-10 right-0 m-0 hover:bg-sky-900 bg-slate-800/80 disabled:bg-black/50" />
            </Carousel>
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

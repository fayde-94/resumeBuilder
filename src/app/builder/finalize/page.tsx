"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import PuppeteerTemplate from "@/components/resume_templates/puppeteerTemplate";
import PdfGeneratorButton from "@/app/templates/generateBtn";
import { AnimatePresence, motion } from "framer-motion";
import UserInteractions from "@/components/UserInteractions";
import BasicTemplate from "@/components/resume_templates/BasicTemplate";
import BasicGenerateBtn from "@/app/templates/BasicGenerateBtn";
const sectionAnim = {
  initial: {
    scale: 0.8,
    y: "-100%",
    height: 0,
    opacity: 0,
    borderRadius: "50px",
  },
  animate: {
    transition: {
      borderRadius: { delay: 1, duration: 1 },
      duration: 0.7,
      delay: 2,
      ease: [0.33, 1, 0.68, 1],
    },
    scale: 1,
    y: 0,

    borderRadius: "0px",
    height: "100vh",
    opacity: 1,
  },
  exit: {
    transition: { duration: 0.5, type: "spring", stiffness: 40 },
    scale: 0.8,
    y: "-100%",
    height: "0px",
    opacity: 0,
  },
};

const page = () => {
  return (
    <AnimatePresence mode="wait">
      <div className="min-h-[100svh] overflow-x-hidden w-full m-0">
        {/* <div className="h-40 bg-red-100 w-full"></div> */}
        <motion.div
          variants={sectionAnim}
          initial={"initial"}
          animate={"animate"}
          exit={"exit"}
          className="flex flex-col w-full bg-[#000] justify-center items-center"
        >
          <UserInteractions />
        </motion.div>
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
                className="aspect-[1000/1440]  flex flex-col justify-center min-h-[80vh] mx-auto max-h-[86vh] px-1 max-w-full"
              >
                <PuppeteerTemplate />
              </motion.div>
              <div className="max-w-[614.89px] w-full flex-col flex pt-2 px-1">
                <PdfGeneratorButton />
              </div>
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
                whileInView={{ height: "100%" }}
                className="aspect-[1000/1440]  flex flex-col justify-center min-h-[80vh] mx-auto max-h-[86vh] px-1 max-w-full"
              >
                <BasicTemplate />
              </motion.div>
              <div className="max-w-[614.89px] w-full flex-col flex pt-2 px-1">
                <BasicGenerateBtn />
              </div>
            </CarouselItem>

            {/* more soon */}
            <CarouselItem className="p-0 m-0 flex flex-col items-center justify-center ">
              <motion.div
                initial={{ scale: 0.1 }}
                transition={{ duration: 0.5 }}
                whileInView={{ scale: 1 }}
                className="aspect-[1000/1440]  flex flex-col justify-center min-h-[80vh] mx-auto max-h-[86vh] max-w-full "
              >
                <p className="max-w-max mx-auto">more templates coming soon</p>
              </motion.div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="size-12 left-0 m-0" />
          <CarouselNext className="size-12  right-0 m-0" />
        </Carousel>
      </div>
    </AnimatePresence>
  );
};

export default page;

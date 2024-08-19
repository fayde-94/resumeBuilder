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
      borderRadius: { delay: 2.2, duration: 2 },
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
          className="flex flex-col w-full min-h-[100svh] bg-[#000] justify-center items-center"
        >
          <UserInteractions />
        </motion.div>
        <Carousel className="max-w-[1100px] w-full mx-auto h-full max-h-screen px-2">
          <CarouselContent className="max-w-[100vw] h-screen p-0 m-0 ">
            <CarouselItem className="p-0 m-0 flex flex-col items-center justify-center ">
              <div className="aspect-[1000/1440]  flex flex-col justify-center min-h-[80vh] mx-auto max-h-[90vh] max-w-full">
                <PuppeteerTemplate />
              </div>
              <div className="max-w-[640px] w-full">
                <PdfGeneratorButton />
              </div>
            </CarouselItem>
            <CarouselItem className=" p-0 m-0 w-full px-2 flex items-center justify-center">
              <div className="aspect-[1000/1440] flex items-center justify-center px-4 max-h-screen">
                <p>more templates coming soon!</p>
              </div>
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

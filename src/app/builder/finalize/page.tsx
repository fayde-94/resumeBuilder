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
import TestComponent from "./TestComponent";
import { Button } from "@/components/ui/button";
import PdfGeneratorButton from "@/app/templates/generateBtn";
import { animate, AnimatePresence, motion } from "framer-motion";
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
      duration: .7,
      delay: 2,
      ease: [0.33, 1, 0.68, 1]
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
      <div className="min-h-screen w-full">
        <motion.div
          variants={sectionAnim}
          initial={"initial"}
          animate={"animate"}
          exit={"exit"}
          className="flex flex-col w-full bg-[#000] justify-center items-center"
        >
          <UserInteractions />
        </motion.div>
        <Carousel className="max-w-[1100px] w-full mx-auto h-full max-h-screen">
          <CarouselContent className=" m-auto w-full ">
            <CarouselItem className=" p-0 px-2 m-0 h-screen items-center pt-4 justify-center sm:justify-normal flex flex-col ">
              <div className="aspect-[1000/1440] h-full max-w-full max-h-[90vh] space-y-4">
                <PuppeteerTemplate />
                <PdfGeneratorButton />
              </div>
            </CarouselItem>
            <CarouselItem className=" p-0 m-0 w-full px-2 flex items-center justify-center">
              <div className="aspect-[1000/1440] flex items-center justify-center mx-auto px-4 max-h-screen">
                <p>more templates coming soon!</p>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="size-20" />
          <CarouselNext className="size-20" />
        </Carousel>
      </div>
    </AnimatePresence>
  );
};

export default page;

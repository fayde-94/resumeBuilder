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
import useEmblaCarousel from "embla-carousel-react";
import { EdgeStoreProvider } from "@/lib/edgestore";
import { type CarouselApi } from "@/components/ui/carousel";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion, useAnimationControls } from "framer-motion";
import BasicTemplate from "@/components/resume_templates/BasicTemplate";
import Languages from "../Languages";
import { useState } from "react";

const BuilderPage = () => {
  const controls = useAnimationControls();
  const { accentColor, experience } = useTextStore();
  console.log("🚀 ~ BuilderPage ~ experience:", experience);
  const [api, setApi] = useState<CarouselApi>();
  console.log("🚀 ~ BuilderPage ~ api:", api);
  const fadein = {
    initial: {
      opacity: 1,
      y: "50%",
    },
    animate: {
      y: "-0%",
      opacity: 0,

      transition: {
        opacity: { delay: 2.5, duration: 0.5 },
        y: { duration: 1, ease: [0.22, 0.6, 0.36, 1] },
      },
    },
  };

  return (
    <div className="w-full min-h-screen relative">
      {/* <Disclaimer /> */}
      <div className="flex flex-row h-screen mx-auto max-w-max gap-x-2">
        <div className="flex flex-col w-full pb-10 ">
          <Contact />

          <EdgeStoreProvider>
            <UploadPFP />
          </EdgeStoreProvider>
          <Summary />
          <Skills />
          <Experience />
          <Education />
          <Languages />
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

        <div className=" hidden 2xl:flex origin-top-left relative min-w-[710px]">
          <div className="fixed  max-w-[710px] top-1/2 -translate-y-1/2 px-1">
            <Carousel
              setApi={setApi}
              className="max-w-[1100px]  w-full relative mx-auto h-full max-h-screen my-auto px-2 "
            >
              <CarouselContent className="  p-0 m-0">
                {/* two column template */}
                <CarouselItem
                  key={"caro1"}
                  className="p-0 m-0 flex flex-col items-center justify-center aspect-[1000/1440] min-w-full min-h-full"
                >
                  <p className="text-center pb-2 w-full max-w-[90%] text-slate-400 capitalize">
                    two column template
                  </p>
                  <div className="relative aspect-[1000/1440] flex flex-col justify-center w-full mx-auto max-h-[86vh] max-w-full rounded-md  select-none">
                    {" "}
                    <span className="bg-green-900 text-sm top-[-24px]  px-2 absolute right-0 z-10">
                      show example
                    </span>
                    <motion.div
                      initial={{ height: "99%" }}
                      whileInView={{ height: "100%" }}
                      className="aspect-[1000/1440] relative flex flex-col justify-center  mx-auto max-h-[86vh] max-w-full rounded-md overflow-clip select-none"
                    >
                      <motion.div
                        variants={fadein}
                        initial={"initial"}
                        whileInView={"animate"}
                        className="aspect-[1000/1440]  absolute flex flex-col justify-center min-h-[80vh] mx-auto max-h-[86vh] max-w-full rounded-md overflow-clip select-none backdrop-brightness-50"
                      >
                        <img
                          src="examples/2col2-example.png"
                          alt=""
                          className=" object-contain "
                        />
                      </motion.div>
                      <PuppeteerTemplate />
                    </motion.div>
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
                    className="aspect-[1000/1440] relative flex flex-col justify-center min-h-[80vh] mx-auto max-h-[86vh] max-w-full rounded-md overflow-clip select-none"
                  >
                    <motion.div
                      variants={fadein}
                      initial={"initial"}
                      whileInView={"animate"}
                      className="aspect-[1000/1440] absolute flex flex-col justify-center min-h-[80vh] mx-auto max-h-[86vh] max-w-full rounded-md overflow-clip select-none backdrop-brightness-50"
                    >
                      <img
                        src="examples/classic2-example.png"
                        alt=""
                        className=" object-contain "
                      />
                    </motion.div>
                    <BasicTemplate />
                  </motion.div>
                </CarouselItem>

                {/* more soon */}
                <CarouselItem
                  key={"caro3"}
                  className="p-0 m-0 flex flex-col items-center justify-center "
                >
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
              <CarouselPrevious
                onMouseDown={() =>
                  console.log(
                    "🚀 ~ BuilderPage ~ emblaMainApi:",
                    api?.selectedScrollSnap()
                  )
                }
                className="size-10 left-0 m-0 hover:bg-sky-900 bg-slate-800/80 disabled:bg-black/50"
              />
              <CarouselNext
                onMouseDown={() =>
                  console.log(
                    "🚀 ~ BuilderPage ~ emblaMainApi:",
                    api?.selectedScrollSnap()
                  )
                }
                className="size-10 right-0 m-0 hover:bg-sky-900 bg-slate-800/80 disabled:bg-black/50"
              />
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

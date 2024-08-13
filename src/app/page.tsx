"use client";

import FlippingNumbers from "@/components/FlippingNumbers";
import {
  getInteractions,
  setInteractions,
  increaseDecreaseLikes,
} from "@/lib/appwrite";
import { useTextStore } from "@/lib/Zustand";
import { Link } from "next-view-transitions";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import FeedbackCarousel from "@/components/FeedbackCarousel";

export default function Home() {
  const { ui_likes, ui_pdfs, setField, interactions } = useTextStore();
  console.log("🚀 ~ Home ~ interations:", interactions);
  console.log("🚀 ~ Home ~ ui_pdfs:", ui_pdfs);
  console.log("🚀 ~ Home ~ ui_likes:", ui_likes);
  // grabbing initial counts
  const initialCount = async () => {
    const res = await getInteractions("pdfs_made");
    const res2 = await getInteractions("user_likes");
    if (res2?.user_likes == ui_likes && res?.pdfs_made == ui_pdfs) {
      return;
    } else {
      setField("ui_pdfs", res?.pdfs_made);
      setField("ui_likes", res2?.user_likes);
    }
  };
  useEffect(() => {
    const start = async () => {
      await initialCount();
    };
    start();
  }, [initialCount]);

  // handling onclick to increase count
  const handleIncreasePDFsMade = async () => {
    const res = await setInteractions("pdfs_made");
    if (res) {
      setField("ui_pdfs", res.pdfs_made);
    }
  };
  const handleIncreaseLikes = async () => {
    const res = await setInteractions("user_likes");
    if (res) {
      setField("ui_likes", res.user_likes);
    }
  };
  const handleIncreaseDecreaseLikes = async () => {
    setField("interactions", {
      ...interactions,
      liked: interactions.liked ? false : true,
    });
    const res = await increaseDecreaseLikes(interactions.liked);

    if (res) {
      setField("ui_likes", res.user_likes);
    }
  };
  console.log("liked ?:", interactions.liked);

  const anim = {
    initial: { scale: 1 },
    whileHover: {
      scale: [1, 1.3, 1],
      transition: { ease: "easeOut", duration: 0.43 },
    },
  };

  return (
    <div className="w-full min-h-screen relative">
      <Disclaimer />

      <div className="flex h-full w-full flex-col items-center space-y-4 capitalize justify-between pb-10 pt-20 max-w-[1440px] mx-auto">
        <div className="w-full flex-col flex mx-auto items-center">
          <div className="max-w-[60%] text-center space-y-2 pb-4 ">
            <h2 className="text-3xl font-semibold ">super resume builder</h2>
            <p className=" text-slate-600">
              Simplify your resume making process.
            </p>
            <p className="text-xs text-left text-neutral-700 hover:text-neutral-400 transition-colors duration-500 select-none">
              site is in development: <br /> you can now generate and download
              your resume! <br />
              but there are many planned features and optimizations to come{" "}
              <br /> including: <br /> template choices. <br /> upload your
              existing resume. <br /> export as DOCX. <br />
              and others...
            </p>
          </div>
        </div>
        <div className="w-full flex-col flex mx-auto items-center ">
          <Link
            // style={{textShadow: "0px 1px 7px #07598590"}}
            href={"/builder"}
            className="relative  py-3 px-5 text-neutral-200 text-3xl rounded-md hover:scale-[1.1] origin-bottom transition-transform duration-300"
          >
            <motion.p
              animate={{
                textShadow: [
                  "0px 1px 15px #07598590",
                  "0px 1px 7px #075985",
                  "0px 1px 15px #07598590",
                ],
              }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="font-light"
            >
              create your resume!
            </motion.p>
            <motion.div
              animate={{
                scaleY: [1, 1.5, 1],
                scaleX: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{ repeat: Infinity, duration: 2 }}
              className=" origin-center left-[-33px] absolute flex items-center inset-x-0 inset-y-[3.2rem] w-[400px]"
            >
              {/* <div className="bg-gradient-to-r from-violet-800 blur-[2px] via-sky-600 to-violet-800 h-[1px] w-full"></div> */}
              <div className="h-[2px] mx-auto w-[60%] bg-gradient-to-r via-sky-500 from-transparent to-transparent"></div>
            </motion.div>
          </Link>
          <div className="inline-flex">
            <FlippingNumbers
              className="text-slate-400 text-base "
              targetValue={ui_pdfs}
            />
            <p className="text-slate-600 text-base"> Resumes Made so far!</p>
          </div>
        </div>
        <FeedbackCarousel />
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

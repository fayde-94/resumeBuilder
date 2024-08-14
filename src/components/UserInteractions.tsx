"use client";

import { Button } from "@/components/ui/button";
import Field from "@/components/ui/Field";
import { Textarea } from "@/components/ui/textarea";
import AutoResizeTextarea from "@/components/ui/TextareaResizing";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaHeart, FaRegHeart } from "react-icons/fa6";

import { motion } from "framer-motion";
import {
  getInteractions,
  setInteractions,
  increaseDecreaseLikes,
  leaveFeedback,
} from "@/lib/appwrite";
import { useTextStore } from "@/lib/Zustand";
import Link from "next/link";
import { useEffect, useState } from "react";
import FlippingNumbers from "./FlippingNumbers";
import Confetti from "react-confetti";
import useViewport from "./hooks/useViewport";

const UserInteractions = () => {
  const { height, width } = useViewport();
  const [bool, setBool] = useState(false);
  const [bool2, setBool2] = useState(false);
  console.log("🚀 ~ UserInteractions ~ bool:", bool);
  const { ui_likes, ui_pdfs, setField, interactions } = useTextStore();
  // grabbing initial counts
  const [feedback, setFeedback] = useState<string>("");
  const [userLikes, setUserLikes] = useState<number>(0);
  const initialCount = async () => {
    const res = await getInteractions("pdfs_made");
    const res2 = await getInteractions("user_likes");
    setField("ui_pdfs", res?.pdfs_made);
    setField("ui_likes", res2?.user_likes);
  };
  useEffect(() => {
    const start = async () => {
      await initialCount();
    };
    start();
  }, []);

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
    const res = await increaseDecreaseLikes(interactions.liked);
    console.log("🚀 ~ handleIncreaseDecreaseLikes ~ res:", res);
    if (res) {
      setField("ui_likes", res.user_likes);
    }
    setField("interactions", {
      ...interactions,
      liked: interactions.liked ? false : true,
    });
  };
  const logcomments = async () => {
    const res = await setInteractions("user_feedback");
    console.log("user_feedback", res?.user_feedback);
  };
  const handleSubmitFeedback = async () => {
    try {
      if (feedback !== "") await leaveFeedback(feedback);
    } catch (error) {
      console.log(error);
    }
    // clear textarea
    setFeedback("");
  };

  const parent = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,

      transition: {
        when: "beforeChildren",
        delay: 2,
        duration: 0.8,
        staggerChildren: 0.5,
      },
    },
  };
  const child = {
    initial: { opacity: 0, x: -100 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 100, ease: [0.33, 1, 0.68, 1] },
    },
  };
  const fadein = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: 2, ease: [0.33, 1, 0.68, 1] },
    },
  };
  const popup = {
    initial: { opacity: 0, scale: 0.1, y: -60 },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 50, ease: [0.33, 1, 0.68, 1] },
    },
  };
  const slideup = {
    initial: { opacity: 0, scale: 0.7, y: 80 },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 50, ease: [0.33, 1, 0.68, 1] },
    },
  };
  return (
    <div className="w-full min-h-screen relative">
      {width && height ? (
        <Confetti
          width={width}
          height={height}
          recycle={false}
          run={bool}
          // initialVelocityY={30}
          numberOfPieces={300}
          confettiSource={{
            x: 0,
            y: height / 10,
            w: width,
            h: height,
          }}
        />
      ) : (
        ""
      )}
      <motion.div
        variants={parent}
        initial="initial"
        animate="animate"
        className="flex h-full w-full flex-col items-center pt-20  space-y-4 text-slate-200 justify-around max-w-[1440px] mx-auto  px-2 "
      >
        <motion.div
          onAnimationComplete={() => setBool(true)}
          variants={popup}
          className=" w-full max-w-[650px] flex flex-col"
        >
          <p className="capitalize text-5xl font-light text-center text-slate-100">
            You did it!
          </p>
        </motion.div>
        <motion.div
          variants={fadein}
          className="max-w-[650px] text-center space-y-2 pb-4 transition-all duration-300"
        >
          <h2 className="text-lg font-semibold text-start text-sky-600">
            Creator Message:
          </h2>
          <p className="font-light text-left md:text-base text-base text-pretty">
            {" "}
            The job market is unbelievably harsh in many industries nowadays,
            It's said that only about 3% of job applications you send will end
            up with an interview, I hope this site will make it easier for you
            to adjust your resume and cater it exactly to your target company's
            requirements, and in turn bumping up that petty percentage by a good
            amount.
            <br /> Good luck everyone!
          </p>
        </motion.div>
        <motion.div
          onAnimationComplete={() => setBool2(true)}
          variants={child}
          className="inline-flex items-center"
        >
          <p className="text-sky-600 pr-4">Tap the heart to boost my ego!</p>
          {bool2 && (
            <FlippingNumbers
              targetValue={ui_likes}
              className="text-2xl font-light"
            />
          )}
          <button
            onClick={handleIncreaseDecreaseLikes}
            className="hover:scale-125 pl-1 transition-all duration-300"
          >
            {interactions.liked ? (
              <FaHeart
                size={26}
                className="hover:fill-slate-500 mb-[2px] fill-red-500"
              />
            ) : (
              <FaRegHeart
                size={26}
                className="hover:fill-slate-200 mb-[2px] fill-slate-500"
              />
            )}
          </button>
        </motion.div>
        <motion.div
          variants={slideup}
          className=" w-full max-w-[650px] flex flex-col"
        >
          <p className="">Did you find the site useful?</p>
          <div>
            <AutoResizeTextarea
              value={feedback}
              className=" bg-background/90 min-h-20"
              placeholder="Leave a comment about your experience"
              onChange={(e) => setFeedback(e.target.value)}
            />
            <Button
              disabled={feedback == "" ? true : false}
              onClick={handleSubmitFeedback}
              className="w-full bg-transparent text-slate-400 underline-offset-2 hover:underline hover:bg-sky-800 transition-all duration-300 self-center mt-1 ring-sky-800  hover:text-slate-100 disabled:border-none focus-visible:ring-2"
              variant={"outline"}
            >
              submit feedback
            </Button>
          </div>
          <div className=" flex pt-20 flex-col items-center gap-y-2">
            <p className="text-slate-600 text-center text-sm">
              continue down to choose your template
            </p>{" "}
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: 30, opacity: [0, 1, 0], scale: [0.7, 1] }}
              transition={{ repeat: Infinity, duration: 2.6 }}
            >
              <IoMdArrowDropdown
                size={24}
                className="fill-slate-600 rounded-full border-2 border-slate-600"
              />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default UserInteractions;

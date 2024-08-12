"use client";

import { Button } from "@/components/ui/button";
import Field from "@/components/ui/Field";
import { Textarea } from "@/components/ui/textarea";
import AutoResizeTextarea from "@/components/ui/TextareaResizing";
import {
  getInteractions,
  setInteractions,
  increaseDecreaseLikes,
  leaveFeedback,
} from "@/lib/appwrite";
import { useTextStore } from "@/lib/Zustand";
import Link from "next/link";
import { useEffect, useState } from "react";

const UserInteractions = () => {
  const { ui_likes, ui_pdfs, setField, interactions } = useTextStore();
  console.log("🚀 ~ Home ~ interations:", interactions);
  console.log("🚀 ~ Home ~ ui_pdfs:", ui_pdfs);
  console.log("🚀 ~ Home ~ ui_likes:", ui_likes);
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
  return (
    <div className="w-full min-h-screen relative">
      <div className="flex h-full w-full flex-col items-center space-y-4 capitalize justify-center brd max-w-[1440px] mx-auto">
        <div className="max-w-[60%] text-center space-y-2 pb-4 ">
          <h2 className="text-3xl font-semibold ">super resume builder</h2>
          <p className=" text-slate-400">
            Simplifying your resume making process.
          </p>
        </div>
        <p className="text-amber-500">{ui_pdfs} Resumes Made so far!</p>
        <Link
          href={"/builder"}
          className=" hover:underline bg-sky-800 py-3 px-5 rounded-md"
        >
          {" "}
          start now!
        </Link>
        <div className="inline-flex gap-x-2">
          <p className="text-amber-500">{ui_likes}</p>
          <button onClick={handleIncreaseDecreaseLikes}>
            {interactions.liked ? "unlike" : "Like!"}
          </button>
        </div>
        <button onClick={logcomments}>log feedback</button>
        <AutoResizeTextarea
          value={feedback}
          className="textarea min-w-[600px]"
          placeholder="Your thoughts about the site"
          onChange={(e) => setFeedback(e.target.value)}
        />
        <Button
          disabled={feedback == "" ? true : false}
          onClick={handleSubmitFeedback}
          className="select-none"
        >
          submit feedback
        </Button>
      </div>
    </div>
  );
};

export default UserInteractions;

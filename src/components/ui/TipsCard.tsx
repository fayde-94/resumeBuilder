import React from "react";
type tipsprops = {
  title: string;
  head?: string;
  p1: string;
  p2?: string;
  p3?: string;
  p4?: string;
};

const TipsCard = ({ title, head, p1, p2, p3, p4 }: tipsprops) => {
  return (
    <div className=" flex flex-col items-center  max-w-[450px] rounded-lg bg-slate-200/60 w-full max-h-max shadow-md shadow-slate-700/20">
      <div className="flex pt-4 flex-col w-full rounded-lg items-center space-y-4 ">
        <h2 className="bg-amber-300 p-3 px-4 w-max rounded-lg font-bold shadow">
          {title}
        </h2>
        <h2 className="text-center text-base leading-6 px-8">{head}</h2>
        <div className="w-full border-b-2 border-b-amber-400 drop-shadow-sm max-w-[80%]"></div>
      </div>
      <div className="flex flex-col w-full h-full pt-6 p-4 space-y-4 bg-gradient-to-t from-slate-300 to-transparent">
        <h2 className="">
          <span className="text-amber-400 drop-shadow-sm">• </span>
          {p1}
        </h2>
        <h2 className={`${!p2 ? "hidden" : ""}`}>
          <span className="text-amber-400 drop-shadow-sm">• </span>
          {p2}
        </h2>
        <h2 className={`${!p3 ? "hidden" : ""}`}>
          <span className="text-amber-400 drop-shadow-sm">• </span>
          {p3}
        </h2>
        <h2 className={`${!p4 ? "hidden" : ""}`}>
          <span className="text-amber-400 drop-shadow-sm">• </span>
          {p4}
        </h2>
      </div>
    </div>
  );
};

export default TipsCard;

import React from "react";
type tipsprops = {
  head?: string;
  p1: string | string[];
  p2?: string | string[];
  p3?: string | string[];
  p4?: string | string[];
};

const TipsCard = ({ head, p1, p2, p3, p4 }: tipsprops) => {
  return (
    <div className=" flex flex-col items-center w-full max-h-max max-w-[900px] text-pretty">
      <div className="flex pt-4 flex-col w-full rounded-lg items-center space-y-1 ">
        <h2 className="text-center text-sm leading-6 px-8">{head}</h2>
        <div className="w-full border-b-2 border-b-sky-700 drop-shadow-sm max-w-[80%]"></div>
      </div>
      <div className="flex flex-col w-full h-full pt-6 p-2 space-y-4  sm:text-lg text-sm">
        <li className="tips-li">
          {Array.isArray(p1)
            ? p1.map((p, i: number) => (
                <>
                  <span key={i}>{p}</span> <br />
                </>
              ))
            : p1}
        </li>
        <li className={`${!p2 ? "hidden" : ""} tips-li`}>
          {Array.isArray(p2)
            ? p2.map((p, i: number) => (
                <>
                  <span key={i}>{p}</span> <br />
                </>
              ))
            : p2}
        </li>
        <li className={`${!p3 ? "hidden" : ""} tips-li`}>
          {Array.isArray(p3)
            ? p3.map((p, i: number) => (
                <>
                  <span key={i}>{p}</span> <br />
                </>
              ))
            : p3}
        </li>
        <li className={`${!p4 ? "hidden" : ""} tips-li`}>
          {Array.isArray(p4)
            ? p4.map((p, i: number) => (
                <>
                  <span key={i}>{p}</span> <br />
                </>
              ))
            : p4}
        </li>
      </div>
    </div>
  );
};

export default TipsCard;

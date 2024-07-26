import React from "react";
import Upload from "../Upload";

const SideBar = () => {
  return (
    <div className="bg-zinc-200 sticky top-0 drop-shadow-xl  py-10 gap-5 flex h-screen w-full max-w-[400px] items-center flex-col">
      <div className="tab">SideBar</div>
      <div className="tab">SideBar</div>
      <div className="tab">SideBar</div>
      <Upload />
    </div>
  );
};

export default SideBar;

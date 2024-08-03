import React from "react";
import Upload from "../Upload";
import Link from "next/link";

const SideBar = () => {
  return (
    <div className="bg-zinc-900 sticky top-0 drop-shadow-xl  py-10 gap-5 px-1 flex h-screen w-full text-neutral-300 max-w-[100px] items-center flex-col">
      <Link className="tab" href={"/"}>
        home
      </Link>
      <Link className="tab" href={"/builder/contact_info"}>
        contact
      </Link>
      <Link className="tab" href={"/builder/skills"}>
        skills
      </Link>
      <Link className="tab" href={"/templates"}>
        temps
      </Link>
      {/* <Upload /> */}
    </div>
  );
};

export default SideBar;

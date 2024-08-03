import Header from "@/components/Header";
import T1 from "@/components/resume_templates/t1";
import Link from "next/link";
import Contact from "./Contact";
import Skills from "./Skills";
import PuppeteerTemplate from "@/components/resume_templates/puppeteerTemplate";

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      {/* <div className="flex items-center w-full h-full justify-center ">
        <Link className=" border-2 text-foreground p-4 rounded-md" href={"/builder/contact_info"}>
          go to start
        </Link>

        
      </div> */}
      <div className="flex flex-row h-screen mx-auto max-w-max ">
        <div className="flex flex-col overflow-y-scroll max-w-[900px] min-w-[900px] w-full">
          <Contact />
          <Skills />
        </div>
        <div className="scale-[.6] pt-16 pl-16 origin-top-left w-[1100px] max-w-[1440px] aspect-[1000/1440]">
          <PuppeteerTemplate />
        </div>
      </div>
    </div>
  );
}

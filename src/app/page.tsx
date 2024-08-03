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
      <div className="flex w-full flex-row  ">
        <div className="flex flex-col  max-w-[900px] min-w-[800px] w-full">
          <Contact />
          <Skills />
        </div>
        <div className="scale-[.7] origin-top-left  w-[1100px] max-w-[1440px] aspect-[1000/1440]">
          <PuppeteerTemplate />
        </div>
      </div>
    </div>
  );
}

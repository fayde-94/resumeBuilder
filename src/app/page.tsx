import Header from "@/components/Header";
import T1 from "@/components/resume_templates/t1";
import Link from "next/link";
import Contact from "./Contact";
import Skills from "./Skills";
import PuppeteerTemplate from "@/components/resume_templates/puppeteerTemplate";
import UploadPFP from "../components/UploadPFP";
import Upload from "@/components/Upload";
import { EdgeStoreProvider } from "@/lib/edgestore";
import ColorPicker from "@/components/ui/ColorPicker";

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      {/* <div className="flex items-center w-full h-full justify-center ">
        <Link className=" border-2 text-foreground p-4 rounded-md" href={"/builder/contact_info"}>
          go to start
        </Link>

        
      </div> */}
      <div className="flex flex-row h-screen mx-auto max-w-max ">
        <div className="flex flex-col max-w-[900px] min-w-[900px] w-full pb-10">
          <Contact />
          <UploadPFP />
          <Skills />
          <ColorPicker />
          {/* <Upload /> */}
        </div>
        <div className=" hidden 2xl:flex  origin-top-left aspect-[1000/1440] relative">
          <div className="fixed  scale-[.6] hidden 2xl:flex pt-16 pl-12 origin-top-left aspect-[1000/1440]">
            <div className=" bg-black rounded-lg overflow-clip mb-2 border-2 border-black">
              <PuppeteerTemplate />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

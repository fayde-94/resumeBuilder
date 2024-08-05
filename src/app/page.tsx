import Contact from "./Contact";
import Skills from "./Skills";
import PuppeteerTemplate from "@/components/resume_templates/puppeteerTemplate";
import UploadPFP from "../components/UploadPFP";
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
        <div className="flex flex-col max-w-[900px] w-full pb-10 ">
          <Contact />
          <UploadPFP />
          <Skills />
          <ColorPicker />
          {/* <Upload /> */}
        </div>
        <div className=" hidden 2xl:flex  origin-top-left aspect-[1000/1440] relative">
          <div className="fixed  scale-[.6] hidden 2xl:flex pt-16 pl-12 origin-top-left aspect-[1000/1440]">
            <div className=" border-2 border-slate-300 shadow-2xl shadow-sky-800/40 rounded-xl overflow-clip mb-2">
              <PuppeteerTemplate />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

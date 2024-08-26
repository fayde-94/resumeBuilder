import PuppeteerTemplate from "@/components/resume_templates/puppeteerTemplate";
import PdfGeneratorButton from "./generateBtn";
import TestComponent from "../builder/finalize/TestComponent";
import BasicTemplate from "@/components/resume_templates/BasicTemplate";
import BasicGenerateBtn from "./BasicGenerateBtn";

const page = () => {
  return (
    <div className="min-h-screen">
      <div className="h-[60px] brd w-full"></div>
      <div className="max-h-[94vh] max-w-max w-full aspect-[1000/1440]">
        <BasicTemplate />
      </div>
      <BasicGenerateBtn />
      {/* <TestComponent /> */}
    </div>
  );
};
export default page;

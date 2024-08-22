import PuppeteerTemplate from "@/components/resume_templates/puppeteerTemplate";
import PdfGeneratorButton from "./generateBtn";
import TestComponent from "../builder/finalize/TestComponent";
import BasicTemplate from "@/components/resume_templates/BasicTemplate";

const page = () => {
  return (
    <div>
      <div className="h-screen w-full aspect-[1000/1440]">
        <BasicTemplate />
      </div>
      {/* <PdfGeneratorButton /> */}
      {/* <TestComponent /> */}
    </div>
  );
};
export default page;

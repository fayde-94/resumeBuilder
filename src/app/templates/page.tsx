import PuppeteerTemplate from "@/components/resume_templates/puppeteerTemplate";
import PdfGeneratorButton from "./generateBtn";
import TestComponent from "../builder/finalize/TestComponent";

const page = () => {
  return (
    <div>
      <PuppeteerTemplate />
      <PdfGeneratorButton />
      {/* <TestComponent /> */}
    </div>
  );
};
export default page;

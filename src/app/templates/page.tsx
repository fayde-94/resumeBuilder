import PuppeteerTemplate from "@/components/resume_templates/puppeteerTemplate";
import PdfGeneratorButton from "./generateBtn";

const page = () => {
  return (
    <div>
      <PuppeteerTemplate />
      <PdfGeneratorButton />
    </div>
  );
};
export default page;

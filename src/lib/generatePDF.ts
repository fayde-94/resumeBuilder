import htmlToPdfmake from "html-to-pdfmake";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const generatePdf = (htmlContent: string) => {
  const pdfContent = htmlToPdfmake(htmlContent);
  const documentDefinition = { content: pdfContent };
  pdfMake.createPdf(documentDefinition).open(); // Open PDF in a new tab
  // To download directly, use .download('resume.pdf')
};

export default generatePdf;

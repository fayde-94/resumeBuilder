import { NextResponse } from "next/server";
import { PDFDocument } from "pdf-lib";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("resume") as Blob;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const pdfDoc = await PDFDocument.load(arrayBuffer);
    const pages = pdfDoc.getPages();
    let extractedText = "";

    pages.forEach((PDFpage) => {
      extractedText +=
        PDFpage.getTextContent()
          .items.map((item: any) => item.str)
          .join(" ") + "\n";
    });

    return NextResponse.json({ text: extractedText });
  } catch (error) {
    console.error("Error parsing PDF:", error);
    return NextResponse.json({ error: "Failed to parse PDF" }, { status: 500 });
  }
}

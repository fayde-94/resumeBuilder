"use client";
import React, { useState } from "react";
import Tesseract from "tesseract.js";

const page = () => {
  const [file, setfile] = useState<File>();
  const [text, settext] = useState<any>();

  const handleFileChange = async () => {
    if (file) {
      const worker = await Tesseract.createWorker();
      console.log("🚀 ~ handleFileChange ~ worker:", worker);

      // Run OCR on the selected file
      const {
        data: { text },
      } = await worker.recognize(file);
      console.log("Extracted text:", text);
      settext(text)

      await worker.terminate();
    }
  };
  return (
    <div>
      <p>nothing to see</p>
    </div>
  );
};

export default page;

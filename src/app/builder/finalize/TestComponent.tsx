"use client";

import { useState } from "react";
import axios from "axios";

const TestComponent = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setSelectedFile(file || null);
  };

  const handleUpload = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("resume", selectedFile);

      try {
        const response = await axios.post("/api/pdf", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        console.log(response.data); // This will log the extracted text
      } catch (error) {
        console.error("Error uploading the file:", error);
      }
    }
  };
  // const handleCall = async () => {
  //   try {
  //     const res = await axios.post("/api/pdf");
  //     console.log("🚀 ~ handleCall ~ res:", res.data);
  //   } catch (error) {
  //     console.log(error, "ass dicks penis error");
  //   }
  // };

  return (
    <div className="flex flex-col gap-4 py-10">
      <input type="file" accept="application/pdf" onChange={handleFileChange} />
      <button className="brd py-2" onClick={handleUpload}>
        Upload and Parse
      </button>
      {/* <button className="brd py-2" onClick={handleCall}>
        test GET route
      </button> */}
    </div>
  );
};

export default TestComponent;

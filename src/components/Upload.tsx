"use client";
import * as React from "react";
import { useEdgeStore } from "../lib/edgestore";
import { useTextStore } from "@/lib/Zustand";
const Upload = () => {
  const [file, setFile] = React.useState<File>();
  const { pfp, setField } = useTextStore();
  const { edgestore } = useEdgeStore();

  const handleUpload = async () => {
    if (file !== undefined) {
      const res = await edgestore.publicImages.upload({
        file,
        onProgressChange: (progress) => {
          // you can use this to show a progress bar
          console.log(progress);
        },
      });

      // you can run some server action or api here
      // to add the necessary data to your database
      console.log("uploaded file", res);
    }
  };
  return (
    <div>
      <input
        type="file"
        onChange={(e) => {
          // setFile(e.target.files?.[0]);
          setField("pfp", e.target.files?.[0]);
        }}
      />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};
export default Upload;

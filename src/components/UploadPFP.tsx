"use client";
import { useState } from "react";
import { useEdgeStore } from "../lib/edgestore";
import { useTextStore } from "@/lib/Zustand";
import { FaImage } from "react-icons/fa";
import { TbPhotoCheck } from "react-icons/tb";

import { EdgeStoreProvider } from "@/lib/edgestore";
import Field from "./ui/Field";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
const UploadPFP = () => {
  const [file, setFile] = useState<File>();
  console.log("🚀 ~ UploadPFP ~ file:", file);
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const { pfp, setField } = useTextStore();
  console.log("🚀 ~ UploadPFP ~ pfp:", pfp);
  const { edgestore } = useEdgeStore();

  const handleUpload = async () => {
    if (file !== undefined) {
      const res = await edgestore.publicImages.upload({
        file: file,
        onProgressChange: (progress) => {
          // you can use this to show a progress bar
          setUploadProgress(progress);
        },
      });

      // you can run some server action or api here
      // to add the necessary data to your database
      console.log("uploaded file", res);

      setField("pfp", res);

      setFile(undefined);
      setTimeout(() => {
        setUploadProgress(0);
      }, 500);
    }
  };
  const handleDelete = async () => {
    setField("pfp", undefined);
    try {
      if (pfp) {
        const res = await edgestore.publicImages.delete({
          url: pfp.url,
        });
      }
    } catch (error) {
      console.error(error);
    }

    // you can run some server action or api here
    // to add the necessary data to your database
  };
  return (
    <EdgeStoreProvider>
      <div className="page ">
        <div className="w-full relative">
          <h2 className="font-semibold text-center leading-none text-4xl p-4 pt-10 rounded-t-lg bg-gradient-to-t from-zinc-900/60 to-transparent">
            Photo
          </h2>
          <p className="absolute right-0 bottom-0 p-4 text-sm text-sky-800">
            Not Required
          </p>
          <div className="w-full border-t-[3px] rounded-full border-t-sky-800"></div>
        </div>

        <div className="flex flex-col space-y-4 w-full max-w-[950px] p-4 bg-zinc-900/60 rounded-b-lg ">
          <div className="flex flex-row justify-between   items-center w-full">
            <div
              className={`aspect-square transition-all duration-300 ${
                pfp?.url ? "max-w-[31.290%]" : "max-w-0"
              }`}
            >
              <img
                src={pfp?.url}
                alt="Photo"
                className={`aspect-square object-cover w-full h-full rounded-lg max-w-64 max-h-64 ${
                  pfp?.thumbnailUrl ? "block" : "hidden"
                }`}
              />
            </div>

            <div
              className={`flex items-center justify-center transition-all duration-300 w-full ${
                pfp?.url ? "max-w-[66.373%]" : "max-w-full"
              }`}
            >
              <label
                htmlFor="dropzone-file"
                className={`flex flex-col items-center justify-center w-full h-64 border-2   border-dashed border-sky-900 hover:border-slate-500 rounded-lg bg-slate-900/40 hover:bg-slate-900/60 ${
                  pfp?.url ? " cursor-not-allowed" : "cursor-pointer"
                }`}
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  {file ? (
                    <>
                      <TbPhotoCheck
                        size={100}
                        className=" opacity-40 stroke-slate-600  "
                      />
                      <p className="text-xs text-slate-600">{file.name}</p>
                      <p className="mb-2 text-sm text-neutral-500">
                        File selected,
                        <span className="font-bold"> click Upload</span>
                      </p>
                      <p className="text-xs text-slate-600">
                        or select a different file
                      </p>
                    </>
                  ) : !file && pfp?.url ? (
                    <>
                      <FaImage
                        size={100}
                        className="opacity-40 fill-slate-600"
                      />
                      <p className="mb-2  text-xs text-neutral-500 text-center">
                        use the button to
                        <span className="font-bold text-sm"> Remove Photo</span>
                        <br /> before uploading a new one
                      </p>
                      <p className=" text-xs text-slate-800">
                        {" "}
                        the photo is immediately deleted from storage upon
                        clicking the button
                      </p>
                    </>
                  ) : (
                    <>
                      <FaImage
                        size={100}
                        className=" opacity-40 fill-slate-600  "
                      />
                      <p className="mb-2 text-sm text-neutral-500">
                        <span className="font-bold">Click to choose file</span>{" "}
                        or drag and drop
                      </p>
                      <p className="text-xs text-slate-600">
                        ( PNG or JPG files )
                      </p>
                    </>
                  )}
                  <div className=" w-48 pt-1 -mb-4 transition-all duration-300">
                    <Progress
                      value={uploadProgress}
                      className={`h-2 bg-transparent`}
                    />
                    <p
                      className={`text-sm text-center align-middle leading-6 ${
                        uploadProgress === 100
                          ? "text-sky-600"
                          : "text-transparent"
                      }`}
                    >
                      uploaded
                    </p>
                  </div>
                </div>
                <input
                  disabled={pfp?.url ? true : false}
                  id="dropzone-file"
                  type="file"
                  className="hidden"
                  onChange={(e) => {
                    setFile(e.target.files?.[0]);
                    // setField("pfp", e.target.files?.[0]);
                  }}
                />
              </label>
            </div>
          </div>

          <div className="flex flex-col w-full h-11">
            <div className="flex flex-row relative h-11">
              <Button
                onClick={handleDelete}
                className={`bg-destructive text-destructive-foreground hover:bg-red-500 absolute inset-0 transition-transform duration-300 origin-left delay-300 ${
                  pfp?.url ? "scale-1" : "scale-0"
                }`}
              >
                Remove Photo
              </Button>
              <Button
                onClick={handleUpload}
                className={`w-full origin-right bg-sky-600 hover:bg-slate-300 absolute inset-0 transition-all duration-300 ${
                  file ? "scale-1" : "scale-0"
                }`}
              >
                Upload
              </Button>
            </div>
          </div>
        </div>
      </div>
    </EdgeStoreProvider>
  );
};
export default UploadPFP;

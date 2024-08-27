// src/components/PdfGeneratorButton.js
"use client";

import { Button } from "@/components/ui/button";
import { setInteractions } from "@/lib/appwrite";
import { useTextStore } from "@/lib/Zustand";
import axios from "axios";
import React, { useState } from "react";

const PdfGeneratorButton = () => {
  const {
    name,
    number,
    position,
    city,
    country,
    pfp,
    email,
    linkedin,
    website,
    accentColor,
    personalSkills,
    technicalSkills,
    education,
    summary,
    pfpSize,
    experience,
    setField,
  } = useTextStore();
  const today = new Date();
  const [pending, setpending] = useState(false);

  const handleDownloadPdf = async () => {
    const response = await axios.post(
      "/api/puppeteer",
      {
        name,
        number,
        email,
        city,
        country,
        linkedin,
        website,
        position,
        technicalSkills,
        personalSkills,
        accentColor,
        education,
        summary,
        pfpSize,
        pfp: pfp ? pfp.url : "",
        experience,
      },
      {
        responseType: "blob",
      }
    );
    const blob = new Blob([response.data], { type: "application/pdf" });

    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = `resume-${today.toLocaleDateString()}.pdf`;
    link.click();

    const res = await setInteractions("pdfs_made");
    if (res) {
      setField("ui_pdfs", res.pdfs_made);
    }
  };

  const handleIncreasePDFsMade = async () => {
    const res = await setInteractions("pdfs_made");
    if (res) {
      setField("ui_pdfs", res.pdfs_made);
    }
  };

  const handleOpenPdf = async () => {
    try {
      setpending(true);
      const response = await axios.post(
        "/api/puppeteer",
        {
          name,
          number,
          email,
          city,
          country,
          linkedin,
          website,
          position,
          technicalSkills,
          personalSkills,
          accentColor,
          education,
          summary,
          pfpSize,
          pfp: pfp ? pfp.url : "",
          experience,
        },
        {
          responseType: "blob",
        }
      );

      // Ensure the response status is successful
      if (response.status === 200) {
        const blob = new Blob([response.data], { type: "application/pdf" });
        const url = URL.createObjectURL(blob);
        window.open(url, "_blank");
        setpending(false);
      } else {
        setpending(true);
        console.error(
          "RETRYING!! , Failed to generate PDF:",
          response.statusText
        );
        // alert("Failed to generate PDF. Please try again.");
        handleOpenPdf();
      }
      const res = await setInteractions("pdfs_made");
      if (res) {
        setField("ui_pdfs", res.pdfs_made);
      }
    } catch (error) {
      console.error("Error during PDF generation:", error);
      // alert(
      //   "An error occurred during PDF generation. Please check the console for details."
      // );
    }
  };

  return (
    <div className="flex w-full flex-col gap-4 ">
      <div className="flex w-full  gap-4 ">
        <Button
          disabled={pending}
          onClick={handleOpenPdf}
          className="w-full bg-transparent text-slate-400 underline-offset-2 hover:underline hover:bg-sky-800 transition-all duration-300 hover:text-slate-100"
          variant={"outline"}
        >
          {pending ? "Processing..." : "View PDF"}
        </Button>
        <Button
          onClick={handleDownloadPdf}
          className="w-full bg-transparent text-slate-400 underline-offset-2 hover:underline hover:bg-sky-800 transition-all duration-300 hover:text-slate-100"
          variant={"outline"}
        >
          Download PDF
        </Button>
      </div>
    </div>
  );
};

export default PdfGeneratorButton;

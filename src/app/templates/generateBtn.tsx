// src/components/PdfGeneratorButton.js
"use client";

import { Button } from "@/components/ui/button";
import { useTextStore } from "@/lib/Zustand";
import axios from "axios";
import React from "react";

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
  } = useTextStore();
  const today = new Date();

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
        pfp: pfp.url,
        experience,
      },
      {
        responseType: "blob",
      }
    );
    const blob = new Blob([response.data], { type: "application/pdf" });

    // const url = URL.createObjectURL(blob);
    // window.open(url, "_blank");

    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = `resume-${today.toLocaleDateString()}.pdf`;
    link.click();
  };
  const handleOpenPdf = async () => {
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
        pfp: pfp.url,
        experience,
      },
      {
        responseType: "blob",
      }
    );
    const blob = new Blob([response.data], { type: "application/pdf" });

    const url = URL.createObjectURL(blob);
    window.open(url, "_blank");

    // const link = document.createElement("a");
    // link.href = window.URL.createObjectURL(blob);
    // link.download = "resume.pdf";
    // link.click();
  };

  return (
    <div className="flex w-full gap-4 pb-20 px-4">
      <Button onClick={handleOpenPdf} className="w-full">
        View PDF
      </Button>
      <Button onClick={handleDownloadPdf} className="w-full">
        Download PDF
      </Button>
    </div>
  );
};

export default PdfGeneratorButton;

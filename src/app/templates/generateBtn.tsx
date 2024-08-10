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
        pfp: pfp ? pfp.url : "",
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
    try {
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
      } else {
        console.error("Failed to generate PDF:", response.statusText);
        alert("Failed to generate PDF. Please try again.");
      }
    } catch (error) {
      console.error("Error during PDF generation:", error);
      alert(
        "An error occurred during PDF generation. Please check the console for details."
      );
    }
  };

  return (
    <div className="flex w-full px-4 flex-col pb-20 gap-4 ">
      <p>view / download not currently working atm rn fr fr no cap shiiiii...</p>
      <div className="flex w-full  gap-4 ">
        <Button onClick={handleOpenPdf} className="w-full">
          View PDF
        </Button>
        <Button onClick={handleDownloadPdf} className="w-full">
          Download PDF
        </Button>
      </div>
    </div>
  );
};

export default PdfGeneratorButton;

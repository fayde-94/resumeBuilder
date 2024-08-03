// src/components/PdfGeneratorButton.js
"use client";

import { useTextStore } from "@/lib/Zustand";
import axios from "axios";
import React from "react";

const PdfGeneratorButton = () => {
  const { name, number, position, city, country, email, linkedin, website } =
    useTextStore();
  const handleGeneratePdf = async () => {
    const response = await axios.post(
      "/api/puppeteer",
      {
        name,
        number,
        position,
        city,
        country,
        email,
        linkedin,
        website,
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

  return <button onClick={handleGeneratePdf}>Generate PDF</button>;
};

export default PdfGeneratorButton;

"use client";
import { useTextStore } from "@/lib/Zustand";
import React from "react";

const T1 = () => {
  const { name, number, email, country, city, linkedin, website, position } =
    useTextStore();
  return (
    <>
      <div id="resume-template">
        <h1 className="tab">name:{name}</h1>
        <p className="tab">Phone: {number}</p>
        <p style={{ color: "red" }}>email:{email}</p>
        <p>position:{position} </p>
        <p>country:{country}</p>
        <p>city:{city} </p>
        <p>linkedin:{linkedin} </p>
        <p>portfolio:{website} </p>
      </div>
    </>
  );
};

export default T1;

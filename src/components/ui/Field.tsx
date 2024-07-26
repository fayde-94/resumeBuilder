"use client";

import React, { useState } from "react";
import { Input } from "./input";
import { cn } from "@/lib/utils";

type props = {
  className?: string;
  title?: string;
  key?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  type?: string;
  value?: string;
  subtext?: string;
};

const Field = ({
  className,
  title = "text here",
  subtext,
  key,
  onChange,
  placeholder,
  required,
  type,
  value,
}: props) => {
  return (
    <div className=" flex flex-col gap-1 md:text-lg text-sm  ">
      <h2 className=" self-start  ">
        {title}
        {required ? <span className="text-cyan-700">*</span> : ""}
      </h2>
      <h3
        className={`${
          subtext == "" ? "hidden" : "visible"
        } self-start text-slate-500 text-sm`}
      >
        {subtext}
      </h3>
      <Input
        onChange={onChange}
        key={key}
        required={required ? true : false}
        type={type ? type : "text"}
        className={cn("w-full md:h-14 text-lg bg-slate-400/30 ", className)}
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
};

export default Field;

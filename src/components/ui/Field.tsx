"use client";

import React, { useState } from "react";
import { Input } from "./input";
import { cn } from "@/lib/utils";

type props = {
  className?: string;
  title?: string;
  key?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  placeholder?: string;
  required?: boolean;
  type?: string;
  value?: string;
  subtext?: string;
  maxLength?: number;
};

const Field = ({
  className,
  title = "text here",
  subtext,
  key,
  onChange,
  onKeyDown,
  placeholder,
  required,
  type,
  value,
  maxLength,
}: props) => {
  return (
    <div className=" flex flex-col md:text-lg text-sm  ">
      {title !== "" && (
        <h2 className=" self-start pb-1 ">
          {title}
          {required ? <span className="text-amber-400"> *</span> : ""}
        </h2>
      )}
      {subtext && (
        <h3
          className={`${
            subtext == "" ? "hidden" : "visible"
          } self-start text-slate-500 text-sm pb-1`}
        >
          {subtext}
        </h3>
      )}
      <Input
        onChange={onChange}
        onKeyDown={onKeyDown}
        key={key}
        maxLength={maxLength}
        required={required ? true : false}
        type={type ? type : "text"}
        className={cn(
          "w-full h-14 text-lg bg-slate-800/60  focus-visible:ring-sky-200 ",
          className
        )}
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
};

export default Field;

"use client";

import React from "react";
import { Input } from "./input";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

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
          {required ? <span className="text-sky-400"> *</span> : ""}
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
      <div className="p-[.1rem] rounded-2xl radialbig">
        <Input
          onChange={onChange}
          onKeyDown={onKeyDown}
          key={key}
          maxLength={maxLength}
          required={required ? true : false}
          type={type ? type : "text"}
          className={cn(
            `w-full h-14 text-lg indent-3 bg-[#1e253b]/90 focus-visible:ring-0 rounded-2xl  `,
            className
          )}
          placeholder={placeholder}
          value={value}
        />
      </div>
    </div>
  );
};

export default Field;

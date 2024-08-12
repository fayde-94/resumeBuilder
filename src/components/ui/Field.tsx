"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Input } from "./input";

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
  list?: string;
  id?: string;
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
  list,
  id,
  maxLength,
}: props) => {
  return (
    <div className=" flex flex-col sm:text-lg text-sm  ">
      {title !== "" && (
        <h2 className=" self-start pb-1 ">
          {title}:{required ? <span className="text-sky-400"> *</span> : ""}
        </h2>
      )}
      {subtext && (
        <h3
          className={`${
            subtext == "" ? "hidden" : "visible"
          } self-start text-slate-500 sm:text-sm pb-1 text-xs`}
        >
          {subtext}
        </h3>
      )}
      <div className="p-[.1rem] rounded-2xl radialbig">
        <Input
          id={id}
          onChange={onChange}
          onKeyDown={onKeyDown}
          key={key}
          list={list}
          maxLength={maxLength}
          required={required ? true : false}
          type={type ? type : "text"}
          className={cn(` field   focus-visible:ring-0`, className)}
          placeholder={placeholder}
          value={value}
        />
      </div>
    </div>
  );
};

export default Field;

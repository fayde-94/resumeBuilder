"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Input } from "./input";
import { FaArrowCircleUp } from "react-icons/fa";

type props = {
  className?: string;
  title?: string;
  name?: string;
  key?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  submitButtonOnclick?: React.MouseEventHandler<HTMLButtonElement>;
  placeholder?: string;
  required?: boolean;
  type?: string;
  value?: string;
  subtext?: string;
  maxLength?: number;
  list?: string;
  id?: string;
  submitButton?: boolean;
};

const Field = ({
  className,
  title = "text here",
  subtext,
  key,
  onChange,
  onKeyDown,
  placeholder,
  name,
  required,
  type,
  value,
  list,
  id,
  maxLength,
  submitButton = false,
  submitButtonOnclick,
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
      <div className="p-[.1rem] rounded-2xl radialbig relative">
        <Input
          id={id}
          name={name}
          spellCheck={false}
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
        {submitButton && (
          <button
            onClick={submitButtonOnclick}
            className="absolute inset-y-0 right-0 mr-3 focus:ring-0 focus:outline-none focus:opacity-100 opacity-50 transition-opacity duration-300"
          >
            <FaArrowCircleUp className=" size-6 lg:size-7 " />
          </button>
        )}
      </div>
    </div>
  );
};

export default Field;

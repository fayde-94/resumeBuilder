import React, { useRef } from "react";
import { Textarea } from "./textarea";

type resizingTextArea = {
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  className?: string;
};
const AutoResizeTextarea = ({
  className,
  onChange,
  placeholder = "type something...",
  value,
}: resizingTextArea) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleInput = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = textarea.scrollHeight + "px";
    }
  };

  return (
    <div className="p-[.1rem] rounded-2xl radialbig">
      <Textarea
        ref={textareaRef}
        onInput={handleInput}
        onFocus={handleInput}
        style={{
          overflow: "hidden",
          resize: "none",
          boxSizing: "border-box",
          padding: "16px",
        }}
        className={className}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default AutoResizeTextarea;

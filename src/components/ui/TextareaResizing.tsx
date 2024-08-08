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
      console.log("scrollHeight:", textarea.scrollHeight);
      textarea.style.height = "auto"; // Reset the height to allow shrinking
      textarea.style.height = `${textarea.scrollHeight}px`; // Set the height to the scrollHeight
    }
  };

  return (
    <div className="p-[.1rem] rounded-2xl radialbig">
      <Textarea
        ref={textareaRef}
        onInput={handleInput}
        style={{
          overflow: "hidden",
          resize: "none", // Disable manual resize by the user
          boxSizing: "border-box", // Ensure padding is included in height calculation
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

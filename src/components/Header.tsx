"use client";
import Field from "@/components/ui/Field";
import { useState } from "react";

const Header = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const formattedValue = formatPhoneNumber(value);
    setPhoneNumber(formattedValue);
    setText({ ...text, number: e.target.value });
  };

  const [text, setText] = useState({
    name: "",
    number: "",
    email: "",
    city: "",
    country: "",
    linkedin: "",
    website: "",
    position: "",
  });
  console.log("🚀 ~ Home ~ text:", text);
  return (
    <div className="page ">
      <h2 className="font-semibold leading-none text-2xl"> Resume Header</h2>
      <div className="flex justify-between w-full ">
        <div>cock</div>
        <div className="grid grid-cols-2 gap-4 w-full max-w-[850px] ">
          <Field
            required
            placeholder="John Wick"
            title="Full Name"
            onChange={(e) => setText({ ...text, name: e.target.value })}
          />
          <Field
            required
            type="text"
            placeholder="(250) 123 1234"
            title="Phone Number"
            value={phoneNumber}
            onChange={handleChange}
          />
          <div className=" col-span-2">
            <Field
              required
              placeholder="Full Stack Developer"
              title="Job Title"
              onChange={(e) => setText({ ...text, position: e.target.value })}
            />
          </div>{" "}
          <Field
            required
            placeholder="Calgary, AB"
            title="City"
            onChange={(e) => setText({ ...text, city: e.target.value })}
          />
          <Field
            required
            placeholder="Canada"
            title="Country"
            onChange={(e) => setText({ ...text, country: e.target.value })}
          />
          <div className=" col-span-2">
            <Field
              required
              type="email"
              placeholder="ineedajob@stuff.com"
              title="Email Address"
              onChange={(e) => setText({ ...text, email: e.target.value })}
            />
          </div>
          <div className=" col-span-2">
            <Field
              placeholder="https://www.linkedin.com/in/..."
              title="LinkedIn Profile"
              onChange={(e) => setText({ ...text, linkedin: e.target.value })}
            />
          </div>
          <div className=" col-span-2">
            <Field
              placeholder="https://www.freelemonade.com"
              title="Web Portfolio"
              onChange={(e) => setText({ ...text, website: e.target.value })}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
const formatPhoneNumber = (value: string): string => {
  // Remove all non-numeric characters
  const cleaned = ("" + value).replace(/\D/g, "");

  // Format according to the pattern
  if (cleaned.length <= 3) {
    return cleaned;
  } else if (cleaned.length <= 6) {
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3)}`;
  } else {
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)} ${cleaned.slice(
      6,
      10
    )}`;
  }
};
export default Header;

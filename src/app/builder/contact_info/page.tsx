"use client";
import T1 from "@/components/resume_templates/t1";
import { Button } from "@/components/ui/button";
import Field from "@/components/ui/Field";
import TipsCard from "@/components/ui/TipsCard";
import generatePdf from "@/lib/generatePDF";
import { useTextStore } from "@/lib/Zustand";
import { useState } from "react";

const ContactPage = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const texts = useTextStore();
  console.log("🚀 ~ page ~ texts:", texts);
  const {
    name,
    number,
    email,
    country,
    city,
    linkedin,
    website,
    position,
    setField,
  } = useTextStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const formattedValue = formatPhoneNumber(value);
    setField("number", formattedValue);
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

  const handleGeneratePdf = () => {
    const resumeHtml = document.getElementById("resume-template")?.innerHTML;
    if (resumeHtml) {
      generatePdf(resumeHtml);
    }
  };
  // console.log("🚀 ~ Home ~ text:", text);
  return (
    <div className="page ">
      <h2 className="font-semibold leading-none text-3xl mb-10">
        {" "}
        Contact Information
      </h2>
      <div className="flex justify-around w-full space-x-10 ">
        <TipsCard
          title="Contact Info Tips"
          head="The headliner of your resume containing your basic information and
          means of contact."
          p1="Social Media
          profiles like LinkedIn are becoming increasingly important for
          companies looking to hire you, over 25% of hiring managers will be
          factoring that into their hiring strategy."
          p2="Your Web
          Portfolio will have significant impact on your chances of getting
          hired, it is where you can showcase your skillset and the results of
          your hard work."
        />
        <div className="grid grid-cols-2 gap-4 w-full max-w-[950px] p-4 bg-slate-200/60  rounded-lg shadow-md  shadow-slate-700/30">
          <Field
            required
            placeholder="John Wick"
            title="Full Name"
            value={name}
            onChange={(e) => setField("name", e.target.value)}
          />
          <Field
            required
            type="text"
            placeholder="(250) 123 1234"
            title="Phone Number"
            maxLength={14}
            value={number}
            onChange={handleChange}
          />
          <div className=" col-span-2">
            <Field
              required
              value={position}
              placeholder="Full Stack Developer"
              title="Job Title"
              onChange={(e) => setField("position", e.target.value)}
            />
          </div>{" "}
          <Field
            required
            value={city}
            placeholder="Calgary, AB"
            title="City"
            onChange={(e) => setField("city", e.target.value)}
          />
          <Field
            required
            value={country}
            placeholder="Canada"
            title="Country"
            onChange={(e) => setField("country", e.target.value)}
          />
          <div className=" col-span-2">
            <Field
              required
              value={email}
              type="email"
              placeholder="ineedajob@stuff.com"
              title="Email Address"
              onChange={(e) => setField("email", e.target.value)}
            />
          </div>
          <div className=" col-span-2">
            <Field
              value={linkedin}
              placeholder="https://www.linkedin.com/in/..."
              title="LinkedIn Profile"
              onChange={(e) => setField("linkedin", e.target.value)}
            />
          </div>
          <div className=" col-span-2">
            <Field
              value={website}
              placeholder="https://www.freelemonade.com"
              title="Web Portfolio"
              onChange={(e) => setField("website", e.target.value)}
            />
          </div>
        </div>
      </div>
      <Button className=" px-8 py-6 text-xl place-self-end mx-4 shadow-md rounded-lg shadow-slate-700/40">
        Next
      </Button>
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
export default ContactPage;

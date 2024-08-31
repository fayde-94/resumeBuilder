"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Field from "@/components/ui/Field";
import TipsCard from "@/components/ui/TipsCard";
import { trimUrls } from "@/lib/utils";
import { useTextStore } from "@/lib/Zustand";
import { useState } from "react";
import PhoneInput, {
  formatPhoneNumber as format,
} from "react-phone-number-input";

const Contact = () => {
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
  console.log("🚀 ~ Contact ~ number:", number.u, number.f);

  const handleChange = (e: any) => {
    setField("number", { u: e, f: format(e) });
  };

  return (
    <div className="page ">
      <div className="w-full">
        <Accordion
          type="single"
          collapsible
          className="p-4 pt-10 pb-0 rounded-t-lg bg-gradient-to-t from-zinc-900/60 to-transparent"
        >
          <h2 className=" text-center leading-none font-light text-2xl">
            Contact Information
          </h2>
          <AccordionItem
            value="item-1"
            className="flex flex-col items-end pb-0"
          >
            <AccordionTrigger className=" gap-x-2 pt-0 pb-2 text-xs text-sky-700 max-w-max ">
              Expand Tips
            </AccordionTrigger>
            <AccordionContent className="pt-3 text-base font-light ">
              <TipsCard
                head="The headliner of your resume containing your basic information and
                means of contact."
                p1="Your Web
                Portfolio will have significant impact on your chances of getting
                hired, it is where you can showcase your skillset and the results of
                your hard work."
                p2="Social Media
                profiles like LinkedIn are becoming increasingly important for
                companies looking to hire you, over 25% of employers will factor that into their hiring strategy."
                p3="Having an unprofessional email address can damage your chances of landing an interview for your dream job, as said by over 33% of employers."
                p4="Pay careful attention to correct grammar when filling your resume, resumes with typos or bad grammar will usually lead to immediate disqualification."
              />
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="w-full border-t-[3px] rounded-full border-t-sky-800"></div>
      </div>
      <div className="flex justify-around w-full space-x-10 max-w-[950px] gap-y-4 sm:p-4 p-2 bg-zinc-900/60 rounded-b-lg">
        <div className="grid grid-cols-2 w-full gap-2 sm:gap-4 pb-1">
          <Field
            required
            placeholder="John Wick"
            title="Full Name"
            value={name}
            className="capitalize"
            onChange={(e) => setField("name", e.target.value)}
          />
          <div className=" flex flex-col sm:text-lg text-sm  ">
            <h2 className=" self-start pb-1 ">Phone Number:</h2>

            <div className="p-[.1rem] rounded-2xl radialbig relative">
              <PhoneInput
                defaultCountry="US"
                countryCallingCodeEditable={false}
                className="focus-visible:border-0 focus-visible:outline-none focus-visible:ring-0"
                placeholder="250 232 8792"
                limitMaxLength
                value={number.u}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <div className=" col-span-2">
            <Field
              required
              value={position}
              placeholder="Full Stack Developer"
              className="capitalize"
              title="Job Title"
              onChange={(e) => setField("position", e.target.value)}
            />
          </div>{" "}
          <Field
            required
            value={city}
            placeholder="Calgary, AB"
            className="capitalize"
            title="City"
            onChange={(e) => setField("city", e.target.value)}
          />
          <Field
            required
            value={country}
            placeholder="Canada"
            className="capitalize"
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
              onChange={(e) => setField("email", trimUrls(e.target.value))}
            />
          </div>
          <div className=" col-span-2">
            <Field
              value={linkedin}
              placeholder="https://www.linkedin.com/in/..."
              title="LinkedIn Profile"
              onChange={(e) => setField("linkedin", trimUrls(e.target.value))}
            />
          </div>
          <div className=" col-span-2">
            <Field
              value={website}
              placeholder="https://www.freelemonade.com"
              title="Web Portfolio"
              onChange={(e) => setField("website", trimUrls(e.target.value))}
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
export default Contact;

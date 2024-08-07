"use client";
import Field from "@/components/ui/Field";
import { useTextStore } from "@/lib/Zustand";

const Contact = () => {
  const texts = useTextStore();
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

  return (
    <div className="page ">
      <div className="w-full">
        <h2 className="font-semibold text-center leading-none text-2xl p-4 pt-10 rounded-t-lg bg-gradient-to-t from-zinc-900/60 to-transparent">
          Contact Information
        </h2>

        <div className="w-full border-t-[3px] rounded-full border-t-sky-800"></div>
      </div>
      <div className="flex justify-around w-full space-x-10 ">
        <div className="grid grid-cols-2 w-full max-w-[950px] gap-y-4 sm:p-4 p-2 gap-2 sm:gap-4 bg-zinc-900/60 rounded-b-lg">
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

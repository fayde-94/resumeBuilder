import { useTextStore } from "@/lib/Zustand";
import Link from "next/link";
import React from "react";
import { FaLinkedin } from "react-icons/fa";

const ResumeTemplate = () => {
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
  return (
    <div
      id="resume-template"
      className=" w-full min-w-[1000px] max-w-[1440px] aspect-[1000/1440] brd"
    >
      <div className="flex h-full w-full flex-row">
        <div className="flex-col p-6 w-1/2 brd h-full border-b-neutral-50 space-y-6 bg-sky-800 text-neutral-50">
          {/* name and title */}
          <div className="w-full text-center space-y-4 ">
            <h1 className="font-semibold text-3xl uppercase">JASON STATHAM</h1>
            <p className="uppercase text-base font-extralight">
              Hollywood Actor
            </p>
          </div>
          {/* contact section */}
          <div>
            <p className=" tracking-wider leading-8 text-base">CONTACT</p>
            <div className="w-full border-t-[3px] mt-1 rounded-full border-t-neutral-50"></div>
          </div>
          <div className="w-full space-y-4 brd">
            <div className="flex flex-row gap-x-2 items-center my-auto align-middle text-sm">
              <div className="flex-col brd">
                <FaLinkedin size={25} />
              </div>
              <div className="flex-col brd text-center align-text-top">
                <p>www.linkedin.com/uowgbhoauw</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col p-6 w-full brd h-full">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae impedit
          aperiam praesentium ipsum placeat culpa totam voluptatem? Quaerat
          consequatur sint magni, excepturi quae assumenda iure tenetur
          molestias explicabo in. Laboriosam aut debitis odio vero autem nobis
          explicabo maiores tempora expedita saepe quas quo soluta veniam,
          cumque nemo consectetur minus quos sit exercitationem eum. A
          perferendis eveniet, enim, illo harum quos nemo, maxime soluta
          officiis nobis earum delectus perspiciatis voluptas. Dicta perferendis
          eligendi saepe deserunt accusantium explicabo, blanditiis similique
          doloremque quidem commodi eius fuga totam numquam odio enim debitis
          earum culpa perspiciatis facere. Ab commodi debitis doloremque dolorum
          explicabo fugit sequi.
        </div>
      </div>
    </div>
  );
};

const Underline = () => {
  return (
    <div className="w-full border-b-[3px] rounded-full border-b-neutral-50"></div>
  );
};

export default ResumeTemplate;

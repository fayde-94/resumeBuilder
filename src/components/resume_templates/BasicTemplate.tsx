"use client";
import { useTextStore } from "@/lib/Zustand";
import { useRef } from "react";
import { calculateSize, useContainerSize } from "../hooks/useContainerSize";
import { cn, trimUrls } from "@/lib/utils";
type p = {
  className?: string;
};

const BasicTemplate = ({ className }: p) => {
  const {
    name,
    number,
    position,
    city,
    country,
    pfp,
    email,
    linkedin,
    website,
    accentColor,
    personalSkills,
    technicalSkills,
    education,
    summary,
    pfpSize,
    experience,
    languages,
  } = useTextStore();

  const basicTemplateRef = useRef<HTMLDivElement>(null);
  const containerSize = useContainerSize(basicTemplateRef);
  console.log("🚀 ~ BasicTemplate ~ containerSize:", containerSize);

  const borderPX = calculateSize("0.4195%", containerSize);
  const borderPXthick = calculateSize("0.5602%", containerSize);
  const svgSize = calculateSize("2%", containerSize);
  const indented = calculateSize("2.5%", containerSize);
  const padding14 = calculateSize("7.8431%", containerSize);
  const padding10 = calculateSize("5.5944%", containerSize);
  const space8 = calculateSize("2.9090%", containerSize);
  const space6 = calculateSize("2.1818%", containerSize);
  const space4 = calculateSize("1.4545%", containerSize);
  const space3 = calculateSize("1.0908%", containerSize);
  const space2 = calculateSize("0.7272%", containerSize);
  const gap6 = calculateSize("3.3566%", containerSize);

  const textTITLE = calculateSize("4.3636%", containerSize);

  const text4xl = calculateSize("5.0349%", containerSize);
  const lineheight4xl = calculateSize("5.5944%", containerSize);

  const textLG = calculateSize("1.6363%", containerSize);
  const lineHeightLG = calculateSize("2.5454%", containerSize);
  const text2XL = calculateSize("2.1818%", containerSize);
  const lineHeight2XL = calculateSize("2.9090%", containerSize);
  const textXL = calculateSize("1.82%", containerSize);
  const colWidth = calculateSize("60.713%", containerSize);

  return (
    <div className="">
      <div
        id="resume-template"
        ref={basicTemplateRef}
        className={cn(
          " aspect-[1000/1440] min-w-full max-w-[1100px] bg-white text-black font-semi",
          className
        )}
      >
        <div
          style={{ fontSize: textLG, lineHeight: lineHeightLG }}
          className="flex h-full w-full flex-col"
        >
          <div
            style={{
              padding: padding14,
              paddingTop: padding10,
            }}
            className={`flex-row p-14 pt-10  h-full border-b-neutral-950 `}
          >
            {/* NAME AND TITLE SECTION */}
            <div
              style={{ paddingBottom: space6 }}
              className="w-full text-center "
            >
              <h1
                style={{
                  fontSize: text4xl,
                  lineHeight: lineheight4xl,
                  paddingBottom: space4,
                }}
                className="font-extrabold text-4xl tracking-widest uppercase leading-[1.1em]"
              >
                {name}
              </h1>
              {/* header contacts */}
              <div
                style={{ columnGap: space4 }}
                className="flex flex-wrap flex-row justify-center gap-x-4 "
              >
                {number.f && (
                  <div
                    style={{ columnGap: space2 }}
                    className="flex flex-row items-center align-middle lowercase "
                  >
                    <div className="h-full content-center">
                      <svg
                        width={svgSize}
                        height={svgSize}
                        fill={accentColor}
                        className=" mb-[1px]"
                        viewBox="0 0 448 512"
                      >
                        <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h352a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48zm-16.39 307.37l-15 65A15 15 0 0 1 354 416C194 416 64 286.29 64 126a15.7 15.7 0 0 1 11.63-14.61l65-15A18.23 18.23 0 0 1 144 96a16.27 16.27 0 0 1 13.79 9.09l30 70A17.9 17.9 0 0 1 189 181a17 17 0 0 1-5.5 11.61l-37.89 31a231.91 231.91 0 0 0 110.78 110.78l31-37.89A17 17 0 0 1 299 291a17.85 17.85 0 0 1 5.91 1.21l70 30A16.25 16.25 0 0 1 384 336a17.41 17.41 0 0 1-.39 3.37z" />
                      </svg>
                    </div>
                    <p className="">{number.f}</p>
                  </div>
                )}

                {email && (
                  <div
                    style={{ columnGap: space2 }}
                    className="flex flex-row items-center align-middle lowercase "
                  >
                    <div>
                      <svg
                        width={svgSize}
                        height={svgSize}
                        fill={accentColor}
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
                      </svg>
                    </div>
                    <p>{email}</p>
                  </div>
                )}

                {city && (
                  <div
                    style={{ columnGap: space2 }}
                    className="flex flex-row items-center align-middle lowercase "
                  >
                    <svg
                      width={svgSize}
                      height={svgSize}
                      fill={accentColor}
                      viewBox="0 0 384 512"
                    >
                      <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                    </svg>
                    <p className="capitalize">{city}</p>
                    {country && (
                      <p className="capitalize">
                        <span className=" text-slate-700">- </span>&nbsp;
                        {country}
                      </p>
                    )}
                  </div>
                )}
                <div
                  style={{ columnGap: space4 }}
                  className="flex flex-row gap-x-4"
                >
                  {website && (
                    <div
                      style={{ columnGap: space2 }}
                      className="flex flex-row items-center align-middle lowercase "
                    >
                      <div>
                        <svg
                          width={svgSize}
                          height={svgSize}
                          fill={accentColor}
                          viewBox="0 0 496 512"
                        >
                          <path d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z" />
                        </svg>
                      </div>
                      <p>{trimUrls(website)}</p>
                    </div>
                  )}
                  {linkedin && (
                    <div
                      style={{ columnGap: space2 }}
                      className="flex flex-row items-center align-middle lowercase "
                    >
                      <div>
                        <svg
                          width={svgSize}
                          height={svgSize}
                          fill={accentColor}
                          viewBox="0 0 448 512"
                        >
                          <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                        </svg>
                      </div>
                      <p className="">{trimUrls(linkedin)}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            {summary || position ? (
              <div className="">
                <div
                  style={{
                    borderColor: "#000",
                    borderTop: `${borderPXthick} solid`,
                  }}
                  className="w-full border-t-[4px] rounded-full"
                ></div>
                <div
                  style={{ padding: `${space6} 0px`, rowGap: space2 }}
                  className="w-full px-2 flex flex-col"
                >
                  <p
                    style={{ fontSize: textXL, lineHeight: lineHeightLG }}
                    className="uppercase font-black text-xl text-center tracking-wider"
                  >
                    {position}
                  </p>
                  <div
                    style={{
                      fontSize: textXL,
                      lineHeight: lineHeightLG,
                    }}
                    className="w-full text-xl font-semibold"
                  >
                    <h2 className="w-full whitespace-pre-line font-semibold tracking-tight">
                      {summary}
                    </h2>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}

            {technicalSkills[0] || personalSkills[0] ? (
              <div className=" ">
                <div
                  style={{
                    borderColor: "#878484",
                    borderTop: `${borderPX} solid`,
                  }}
                  className="w-full border-t-[3px] rounded-full "
                ></div>
                <div
                  style={{ padding: `${space6} 0px`, rowGap: space2 }}
                  className="w-full px-2 flex flex-col"
                >
                  <p
                    style={{ fontSize: textXL, lineHeight: lineHeightLG }}
                    className="uppercase font-black text-xl text-center tracking-wider"
                  >
                    strengths and Expertise
                  </p>
                  <div
                    style={{ fontSize: textXL, lineHeight: lineHeightLG }}
                    className="w-full text-xl font-semibold"
                  >
                    <div
                      style={{ columnGap: gap6 }}
                      className=" grid grid-cols-4 gap-x-6 capitalize font-semibold max-w-max mx-auto"
                    >
                      {technicalSkills?.map((skill, index) => (
                        <p className="whitespace-nowrap" key={index}>
                          {skill}
                        </p>
                      ))}
                      {personalSkills?.map((skill, index) => (
                        <p className="whitespace-nowrap" key={index}>
                          {skill}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}

            {experience[0] ? (
              <div className="">
                <div
                  style={{
                    borderColor: "#878484",
                    borderTop: `${borderPX} solid`,
                  }}
                  className="w-full border-t-[3px] rounded-full "
                ></div>
                <div
                  style={{ padding: `${space6} 0px`, rowGap: space2 }}
                  className="w-full px-2 flex flex-col"
                >
                  <p
                    style={{ fontSize: textXL, lineHeight: lineHeightLG }}
                    className="uppercase font-black text-xl text-center tracking-wider"
                  >
                    professional experience
                  </p>
                  <div
                    style={{ fontSize: textLG, lineHeight: lineHeightLG }}
                    className="w-full text-xl font-semibold"
                  >
                    {experience.map((exp, i: number) => (
                      <div
                        style={{
                          fontSize: textLG,
                          lineHeight: lineHeightLG,
                          paddingBottom: space4,
                        }}
                        key={i}
                        className="w-full  text-xl flex flex-col "
                      >
                        <div
                          style={{
                            fontSize: textLG,
                            lineHeight: lineHeightLG,
                          }}
                          className="w-full flex justify-between font-extrabold"
                        >
                          <p className="capitalize  ">
                            {experience[i]?.employer}
                          </p>
                          <div className=" flex">
                            {experience[i]?.startMonth && (
                              <p className="  capitalize">
                                {experience[i].startMonth}&nbsp;
                              </p>
                            )}
                            {experience[i]?.startYear && (
                              <p className=" ">
                                {experience[i].startYear}&nbsp;
                              </p>
                            )}
                            {experience[i]?.endMonth ||
                            experience[i]?.endYear ? (
                              <p className=" ">-&nbsp;</p>
                            ) : (
                              ""
                            )}
                            {experience[i]?.endMonth ? (
                              <p className="  capitalize">
                                {experience[i].endMonth}&nbsp;
                              </p>
                            ) : (
                              ""
                            )}
                            {experience[i]?.endYear ? (
                              <p className=" ">{experience[i].endYear}&nbsp;</p>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                        <p
                          style={{ fontSize: textXL, lineHeight: lineHeightLG }}
                          className="capitalize text-xl font-black"
                        >
                          {experience[i]?.jobPosition}
                        </p>

                        <div
                          style={{
                            color: accentColor,
                            fontSize: textXL,
                            lineHeight: lineHeightLG,
                            paddingBottom: space4,
                          }}
                          className="w-full font-semibold tracking-tight"
                        >
                          {experience[i]?.bullet1 && (
                            <li
                              style={{
                                paddingTop: space2,
                                textIndent: `-${indented}`,
                                marginLeft: space6,
                                paddingLeft: space2,
                              }}
                              className="whitespace-pre-line list-inside"
                            >
                              <span className="text-black">
                                {experience[i].bullet1}
                              </span>
                            </li>
                          )}
                          {experience[i]?.bullet2 && (
                            <li
                              style={{
                                paddingTop: space2,
                                textIndent: `-${indented}`,
                                marginLeft: space6,
                                paddingLeft: space2,
                              }}
                              className="whitespace-pre-line list-inside"
                            >
                              <span className="text-black">
                                {experience[i].bullet2}
                              </span>
                            </li>
                          )}
                          {experience[i]?.bullet3 && (
                            <li
                              style={{
                                paddingTop: space2,
                                textIndent: `-${indented}`,
                                marginLeft: space6,
                                paddingLeft: space2,
                              }}
                              className="whitespace-pre-line list-inside"
                            >
                              <span className="text-black">
                                {experience[i].bullet3}
                              </span>
                            </li>
                          )}
                        </div>
                      </div>
                    ))}
                    <div className="w-full grid grid-cols-2">
                      <div
                        style={{
                          borderColor: "#878484",
                          borderTop: `${borderPX} solid`,
                        }}
                        className="w-full border-t-[3px] rounded-full col-span-2 "
                      ></div>
                      {education?.school ||
                      education?.degree ||
                      education?.gradMonth ||
                      education?.gradYear ? (
                        <div className=" ">
                          <div
                            style={{ padding: `${space6} 0px`, rowGap: space2 }}
                            className="w-full px-2 flex flex-col "
                          >
                            <p
                              style={{
                                fontSize: textXL,
                                lineHeight: lineHeightLG,
                              }}
                              className="uppercase font-black text-xl text-left tracking-wider"
                            >
                              education
                            </p>

                            <div className="w-full ">
                              {education?.gradMonth !== "" ||
                              education?.gradYear !== "" ? (
                                <li
                                  style={{
                                    fontSize: textXL,
                                    lineHeight: lineHeightLG,
                                    textIndent: `-${indented}`,
                                    marginLeft: space6,
                                    paddingLeft: space2,
                                  }}
                                  className="text-neutral-600  capitalize marker:text-transparent list-inside"
                                >
                                  <span
                                    style={{
                                      fontSize: textLG,
                                      lineHeight: lineHeightLG,
                                    }}
                                    className="text-black"
                                  >
                                    {education?.gradMonth}&nbsp;
                                    {education?.gradYear}
                                  </span>
                                </li>
                              ) : (
                                ""
                              )}
                              {education?.degree && (
                                <li
                                  style={{
                                    color: accentColor,
                                    fontSize: textXL,
                                    lineHeight: lineHeightLG,
                                    textIndent: `-${indented}`,
                                    marginLeft: space6,
                                    paddingLeft: space2,
                                  }}
                                  className="uppercase   font-semibold list-inside"
                                >
                                  <span
                                    style={{
                                      fontSize: textLG,
                                      lineHeight: lineHeightLG,
                                    }}
                                    className="text-black"
                                  >
                                    {education?.degree}
                                  </span>
                                </li>
                              )}
                              {education?.school && (
                                <li
                                  style={{
                                    fontSize: textXL,
                                    lineHeight: lineHeightLG,
                                    textIndent: `-${indented}`,
                                    marginLeft: space6,
                                    paddingLeft: space2,
                                  }}
                                  className="capitalize   text-neutral-600   marker:text-transparent list-inside"
                                >
                                  <span
                                    style={{
                                      fontSize: textLG,
                                      lineHeight: lineHeightLG,
                                    }}
                                    className="text-black"
                                  >
                                    {education?.school}
                                  </span>
                                </li>
                              )}
                            </div>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}

                      {/* LANGUAGES */}
                      {languages[0]?.lang && (
                        <div className="">
                          <div
                            style={{ padding: `${space6} 0px`, rowGap: space2 }}
                            className="w-full px-2 flex flex-col"
                          >
                            <p
                              style={{
                                fontSize: textXL,
                                lineHeight: lineHeightLG,
                              }}
                              className="uppercase font-black text-xl text-left tracking-wider"
                            >
                              languages
                            </p>
                            <div className="w-full flex flex-col capitalize  ">
                              {languages.map((obj, index: number) => (
                                <>
                                  <li
                                    key={index}
                                    style={{
                                      color: accentColor,
                                      fontSize: textXL,
                                      lineHeight: lineHeightLG,
                                    }}
                                    className="ml-2  font-semibold list-inside"
                                  >
                                    <span
                                      style={{
                                        fontSize: textLG,
                                        lineHeight: lineHeightLG,
                                      }}
                                      className="text-black"
                                    >
                                      {obj.lang}&nbsp;
                                    </span>
                                    <span
                                      style={{
                                        fontSize: textLG,
                                        lineHeight: lineHeightLG,
                                      }}
                                      className=" text-neutral-600"
                                    >
                                      &nbsp;-&nbsp;
                                    </span>
                                    <span
                                      style={{
                                        fontSize: textLG,
                                        lineHeight: lineHeightLG,
                                      }}
                                      className=" text-neutral-600"
                                    >
                                      &nbsp;
                                      {obj.prof}
                                    </span>
                                  </li>
                                </>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicTemplate;

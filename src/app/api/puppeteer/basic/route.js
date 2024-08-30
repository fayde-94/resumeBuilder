// src/app/api/puppeteer/route.js
import puppeteer from "puppeteer";
import { readFileSync } from "fs";
import { resolve } from "path";

const puppeteerCore = require("puppeteer-core");
const chromium = require("@sparticuz/chromium-min");

export async function POST(req, res) {
  const data = await req.json();
  // console.log("🚀 ~ POST ~ data:", data);

  const cssPath = resolve(
    process.cwd(),
    "src/app/templates/",
    "templateStyles.css"
  );
  const cssContent = readFileSync(cssPath, "utf8");

  // npx tailwindcss -o styles.css --minify
  console.log(
    "Resolved CSS Path: ♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥",
    resolve(process.cwd(), "src/app/templates/", "templateStyles.css")
  );

  const templateHtml = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
        ${readFileSync(
          resolve(process.cwd(), "src/app/templates/", "templateStyles.css"),
          "utf8"
        )}
        </style>
      </head>
      <body>
        <div id="resume-template">
          <div
            id="resume-template"
            class=" w-[1100px] aspect-[1000/1440] bg-white"
            >
            
        <div
          class="flex h-full w-full flex-col"
        >
          <div
            class='flex-row p-24  h-full border-neutral-950'
          >
            <div
              class="w-full text-center pb-6 flex flex-col gap-y-2"
            >
              <h1
                class="font-extrabold text-4xl pb-2 tracking-widest uppercase leading-[1.1em]"
              >
                ${data.name}
              </h1>

              <div
                class="flex flex-wrap flex-row justify-center gap-x-4 text-lg"
              >
                ${
                  data.number
                    ? `<div
                    class="flex flex-row items-center gap-x-2 align-middle lowercase "
                  >
                    <div>
                      <svg
                        width="22"
                        height="22"
                        fill="black"
                        viewBox="0 0 448 512"
                      >
                        <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h352a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48zm-16.39 307.37l-15 65A15 15 0 0 1 354 416C194 416 64 286.29 64 126a15.7 15.7 0 0 1 11.63-14.61l65-15A18.23 18.23 0 0 1 144 96a16.27 16.27 0 0 1 13.79 9.09l30 70A17.9 17.9 0 0 1 189 181a17 17 0 0 1-5.5 11.61l-37.89 31a231.91 231.91 0 0 0 110.78 110.78l31-37.89A17 17 0 0 1 299 291a17.85 17.85 0 0 1 5.91 1.21l70 30A16.25 16.25 0 0 1 384 336a17.41 17.41 0 0 1-.39 3.37z" />
                      </svg>
                    </div>
                    <p>${data.number}</p>
                  </div>`
                    : ""
                }

                ${
                  data.email
                    ? `<div
                    class="flex flex-row items-center gap-x-2 align-middle lowercase "
                  >
                    <div>
                      <svg
                        width="22"
                        height="22"
                        fill="black"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
                      </svg>
                    </div>
                    <p>${data.email}</p>
                  </div>`
                    : ""
                }

                ${
                  data.city
                    ? `<div
                    class="flex flex-row items-center gap-x-2 align-middle lowercase "
                  >
                    <svg
                      width="22"
                      height="22"
                      fill="black"
                      viewBox="0 0 384 512"
                    >
                      <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                    </svg>
                    <p class="capitalize">${data.city}</p>
                    ${
                      data.country &&
                      `<p class="capitalize">
                        <span class=" text-slate-700">-</span>&nbsp;
                        ${data.country}
                      </p>`
                    }
                  </div>`
                    : ""
                }
                <div
                  class="flex flex-row gap-x-4"
                >
                ${
                  data.website
                    ? `<div
                      class="flex flex-row items-center gap-x-2 align-middle lowercase "
                    >
                      <div>
                        <svg
                          width="22"
                          height="22"
                          fill="black"
                          viewBox="0 0 496 512"
                        >
                          <path d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z" />
                        </svg>
                      </div>
                      <a href="https://${data.website}">${data.website}</a>
                    </div>`
                    : ""
                }
                    ${
                      data.linkedin
                        ? `<div
                      class="flex flex-row items-center gap-x-2 align-middle lowercase "
                    >
                      <div>
                        <svg
                          width="22"
                          height="22"
                          fill="black"
                          viewBox="0 0 448 512"
                        >
                          <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                        </svg>
                      </div>
                      <a href="https://${data.linkedin}">${data.linkedin}</a>
                    </div>`
                        : ""
                    }
                </div>
              </div>
            </div>

            <div class="flex flex-col gap-y-6">
              <div
                class="w-full border-t-[5px] border-black rounded-full"
              ></div>
              <div
                class="w-full flex flex-col gap-y-2"
              >
                <p
                  class="uppercase font-black text-xl text-center tracking-wider"
                >${data.position}</p>
                <div
                  class="w-full"
                >
                  <h2 class="w-full whitespace-pre-line font-medium text-basic tracking-basic pb-6">${
                    data.summary
                  }</h2>
                </div>
              </div>
            </div>

            <div class="flex flex-col gap-y-6">
              <div
                class="w-full border-t-[4px] border-neutral-800 rounded-full "
              ></div>
              <div
                class="w-full flex flex-col gap-y-2 pb-6"
              >
                <p
                  class="uppercase font-black text-xl text-center tracking-wider"
                >
                  strengths and Expertise
                </p>
                <div
                  class="w-full text-xl font-medium"
                >
                  <div
                    class=" grid grid-cols-4 gap-x-8 capitalize font-medium max-w-max mx-auto"
                  >
                  ${data.technicalSkills
                    ?.map(
                      (skill, i) =>
                        `<p
                      key='${i}' class="whitespace-nowrap">
                        ${skill}
                      </p>`
                    )
                    .join("")}
                  ${data.personalSkills
                    ?.map(
                      (skill, i) =>
                        `<p
                      key='${i}' class="whitespace-nowrap" key={index}>
                        ${skill}
                      </p>`
                    )
                    .join("")}
                  </div>
                </div>
              </div>
            </div>

           

            <div class="">
              <div
                class="w-full border-t-[4px] border-neutral-800 rounded-full "
              ></div>
              <div
                class="w-full py-6 flex flex-col gap-x-2"
              >
                <p
                  class="uppercase font-black text-xl text-center tracking-wider"
                >
                  professional experience
                </p>
                <div
                  class="w-full text-lg font-medium"
                >
                
                

  ${data.experience
    ?.map(
      (exp, i) => `
    <div key='${i}' class="w-full pb-4 text-lg flex flex-col">
      <div class="w-full flex justify-between font-extrabold">
        <p class="capitalize">
          ${exp.employer || ""}
        </p>
        <div class="flex">
          ${
            exp.startMonth
              ? `<p class="capitalize">${exp.startMonth}&nbsp;</p>`
              : ""
          }
          ${exp.startYear ? `<p class="">${exp.startYear}&nbsp;</p>` : ""}
          ${exp.endMonth || exp.endYear ? `<p class="">-&nbsp;</p>` : ""}
          ${
            exp.endMonth
              ? `<p class="capitalize">${exp.endMonth}&nbsp;</p>`
              : ""
          }
          ${exp.endYear ? `<p class="">${exp.endYear}&nbsp;</p>` : ""}
        </div>
      </div>
      <p class="capitalize text-xl font-black">
        ${exp.jobPosition || ""}
      </p>
      <div style='color: ${data.accentColor};' class="w-full font-medium text-xl pb-4 pt-1 px-1 tracking-basic ">
        ${
          exp.bullet1
            ? `
          <li class="whitespace-pre-line -indent-6 ml-6  pt-1"><span class="text-black">${exp.bullet1}</span></li>`
            : ""
        }
        ${
          exp.bullet2
            ? `
          <li class="whitespace-pre-line -indent-6 ml-6  pt-1"><span class="text-black">${exp.bullet2}</span></li>`
            : ""
        }
        ${
          exp.bullet3
            ? `
          <li class="whitespace-pre-line -indent-6 ml-6  pt-1"><span class="text-black">${exp.bullet3}</span></li>`
            : ""
        }
      </div>
    </div>
  `
    )
    .join("")}
    
      <div class="w-full grid grid-cols-2 gap-y-6">
              <div
                class="w-full border-t-[4px] col-span-2 border-neutral-800 rounded-full "
              ></div>
                    ${
                      data.education?.school ||
                      data.education?.degree ||
                      data.education?.gradMonth ||
                      data.education?.gradYear
                        ? `<div class=" ">
                          <div class="w-full flex flex-col gap-y-2 "><p
                  class="uppercase font-black text-xl tracking-wider"
                >
                  education
                </p>

                            <div class="w-full text-lg ">
                              ${
                                data.education?.gradMonth !== "" ||
                                data.education?.gradYear !== ""
                                  ? `<li class=" text-transparent pl-1 -indent-6 ml-6 text-end capitalize "><span class="text-neutral-600">${data.education?.gradMonth}&nbsp;${data.education?.gradYear}</span></li>`
                                  : ""
                              }
                              ${
                                data.education?.degree &&
                                `<li style='color: ${data.accentColor};' class="uppercase pl-1 -indent-6 ml-6 text-lg text-end font-basic"><span class="text-black">${data.education?.degree}</span></li>`
                              }
                              ${
                                data.education?.school &&
                                `<li class="capitalize text-transparent pl-1 -indent-6 ml-6 text-lg text-end"><span class="text-neutral-600">${data.education?.school}</span></li>`
                              }
                            </div>
                          </div>
                        </div>`
                        : ""
                    } ${
    data.languages[0]?.lang
      ? `<div class="">
                  <div
                    class="w-full px-2 flex  gap-y-2 flex-col"
                  >
                    <p
                      class="uppercase font-black text-xl text-left tracking-wider"
                    >
                      languages
                    </p>
                    <div class="w-full flex flex-col capitalize  ">
                      ${data.languages
                        .map(
                          (obj, index) =>
                            `<li
                            key='${index}'
                            style='color: ${data.accentColor};'
                            
                            class="ml-2 text-lg pl-1 font-semibold"
                          >
                            <span class=" text-black">
                              ${obj.lang}&nbsp;
                            </span>
                            <span class=" text-neutral-600">
                              &nbsp;-&nbsp;
                            </span>
                            <span class=" text-neutral-600">
                              &nbsp;
                              ${obj.prof}
                            </span>
                          </li>`
                        )
                        .join("")}
                    </div>
                  </div>
                </div>`
      : ""
  }

                    
                  
                    

                    
                  </div>
                  </div>


                </div>
              </div>
            </div>


          </div>
        </div>
          </div>
      </div>
    </div>
      </body>
    </html>
  `;

  const isLocal = process.env.NODE_ENV === "development";
  let browser;
  // const browser = await puppeteer.launch();
  if (isLocal) {
    browser = await puppeteer.launch();
  } else {
    browser = await puppeteerCore.launch({
      args: [...chromium.args, "--hide-scrollbars", "--disable-web-security"],
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath(
        `https://github.com/Sparticuz/chromium/releases/download/v126.0.0/chromium-v126.0.0-pack.tar`
      ),
      headless: chromium.headless,
      ignoreHTTPSErrors: true,
    });
  }

  const page = await browser.newPage();
  await page.setContent(templateHtml, {
    waitUntil: "networkidle0",
  });

  const pdfBuffer = await page.pdf({
    format: "A4",
    printBackground: true,
    pageRanges: "1", // Ensures only the first page is included in the PDF
  });

  await browser.close();

  return new Response(pdfBuffer, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": "attachment; filename=resume.pdf",
    },
  });
}

{
  /* <div class="  ">
  <div class="w-full gap-y-2 flex flex-col">
    <p class="uppercase font-black text-xl text-left tracking-wider">
      languages
    </p>

    <div class="w-full flex flex-col capitalize">
      <li class="ml-2 text-lg font-basic">
        <span class=" text-black">english&nbsp;</span>
        <span class=" text-neutral-600">-</span>
        <span class=" text-neutral-600">&nbsp;fluent</span>
      </li>
      <li class="ml-2 text-lg font-basic">
        <span class=" text-black">arabic&nbsp;</span>
        <span class=" text-neutral-600">-</span>
        <span class=" text-neutral-600">&nbsp;native</span>
      </li>
    </div>
  </div>
</div>; */
}

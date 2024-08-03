// src/app/api/puppeteer/route.js
import puppeteer from "puppeteer";
import { readFileSync } from "fs";
import { resolve } from "path";

export async function POST(req, res) {
  const data = await req.json();
  console.log("🚀 ~ POST ~ data:", data);

  const templateHtml = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          ${readFileSync(resolve("./public/styles.css"), "utf8")}
        </style>
      </head>
      <body>
       <div id="resume-template">
      <div
        id="resume-template"
        class=" w-[1100px] max-w-[1440px] aspect-[1000/1440] shadow-xl bg-white"
      >
        <div class="flex h-full w-full flex-row">
          <div class="flex-col p-6 w-[35%]  h-full border-b-neutral-50 space-y-6 bg-sky-800 text-neutral-200">
            <div class="w-full text-center space-y-2">
              <h1 class="font-semibold text-4xl uppercase">
                ${data.name}
              </h1>
              <div class="flex w-full justify-center">
                <div class=" size-[224px] overflow-clip rounded-full p-[3px] bg-neutral-300">
                  <img
                    class=" object-cover object-center rounded-full w-full h-full"
                    src="https://variety.com/wp-content/uploads/2024/01/GettyImages-1849594759-e1704908885262.jpg?w=1024"
                  />
                </div>
              </div>
              <p class="uppercase text-base tracking-widest">
              ${data.position}
              </p>
            </div>

            <div class="w-full ">
              <div class="pb-4 text-white">
                <p class="tracking-wider leading-8 text-2xl">
                  WEB PORTFOLIO
                </p>
                <div class="w-full border-t-[3px]  rounded-full border-t-neutral-50"></div>
              </div>
              <div class="w-full space-y-4">
                <div class="flex flex-row gap-x-2 items-center align-middle lowercase">
                  <svg
                    width="30"
                    height="30"
                    fill="white"
                    viewBox="0 0 496 512"
                  >
                    <path d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z" />
                  </svg>
                  <p>${data.website}</p>
                </div>
              </div>
            </div>

            <div class="w-full">
              <div class="pb-4 text-white">
                <p class="tracking-wider leading-8 text-2xl">CONTACT</p>
                <div class="w-full border-t-[3px]  rounded-full border-t-neutral-50"></div>
              </div>
              ${
                data.linkedin &&
                `
                <div class="w-full space-y-4">
                <div class="flex flex-row gap-x-2 items-center align-middle lowercase">
                  <svg
                    width="30"
                    height="30"
                    fill="white"
                    viewBox="0 0 448 512"
                  >
                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                  </svg>
                  <p>${data.linkedin}</p>
                </div>`
              }
              

                ${
                  data.email &&
                  `<div class="flex flex-row gap-x-2 items-center align-middle lowercase">
                  <svg width="32" height="32" fill="white" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                  <p>${data.email}</p>
                </div>`
                }
                
                ${
                  data.number &&
                  `<div class="flex w-full flex-row gap-x-2 items-center align-middle lowercase">
                  <svg
                    width="30"
                    height="30"
                    fill="white"
                    viewBox="0 0 448 512"
                  >
                    <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h352a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48zm-16.39 307.37l-15 65A15 15 0 0 1 354 416C194 416 64 286.29 64 126a15.7 15.7 0 0 1 11.63-14.61l65-15A18.23 18.23 0 0 1 144 96a16.27 16.27 0 0 1 13.79 9.09l30 70A17.9 17.9 0 0 1 189 181a17 17 0 0 1-5.5 11.61l-37.89 31a231.91 231.91 0 0 0 110.78 110.78l31-37.89A17 17 0 0 1 299 291a17.85 17.85 0 0 1 5.91 1.21l70 30A16.25 16.25 0 0 1 384 336a17.41 17.41 0 0 1-.39 3.37z" />
                  </svg>
                  <p>${data.number}</p>
                </div>
                  `
                }
                
              </div>
            </div>

            <div class="w-full">
              <div class="pb-4 text-white">
                <p class="tracking-wider leading-8 text-2xl">
                  TECHNICAL SKILLS
                </p>
                <div class="w-full border-t-[3px]  rounded-full border-t-neutral-50"></div>
              </div>
              <div class="w-full space-y-3 uppercase font-semibold">
                <li class="ml-3">Javascript</li>
                <li class="ml-3">typescript</li>
                <li class="ml-3">react</li>
                <li class="ml-3">next.js</li>
                <li class="ml-3">react query</li>
                <li class="ml-3">typescript</li>
                <li class="ml-3">typescript</li>
              </div>
            </div>

            <div class="w-full">
              <div class="pb-4 text-white">
                <p class="tracking-wider leading-8 text-2xl">
                  PERSONAL SKILLS
                </p>
                <div class="w-full border-t-[3px]  rounded-full border-t-neutral-50"></div>
              </div>
              <div class="w-full space-y-3 uppercase font-semibold">
                <li class=" ml-3 ">CRITICAL THINKING</li>
                <li class=" ml-3 ">PROBLEM SOLVING</li>
                <li class=" ml-3 ">AGILE</li>
                <li class=" ml-3 ">QUICK LEARNING</li>
                <li class=" ml-3 ">PLANNING</li>
              </div>
            </div>
          </div>

          <div class="flex-col p-6 space-y-6 w-full  h-full">
            <div class="w-full pt-2">
              <div class="pb-4 text-sky-800">
                <p class="tracking-wider leading-8 text-2xl">
                  PROFESSIONAL SUMMARY
                </p>
                <div class="w-full border-t-[3px] rounded-full border-t-sky-800"></div>
              </div>
              <div class="w-full space-y-3 text-xl font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci earum commodi vel id necessitatibus enim rerum, quaerat
                tempore blanditiis cumque architecto voluptate inventore optio
                eius perspiciatis voluptatibus nemo illum ex labore accusamus
                ipsam eligendi rem? Quod, iusto quisquam. Quasi sed modi
                rwtqwrqwt tqweqtw distinctio debitis, eos unde consequatur.
                Libero saepe alias cupiditate fugiat earum. Voluptatum
                voluptatem quae rerum autem consectetur saepe explicabo
                voluptatibus alias. Magni, facilis dignissimos quas itaque
                ducimus assumenda sunt?
              </div>
            </div>

            <div class="w-full flex flex-col pt-2 gap-4">
              <div class=" text-sky-800">
                <p class="tracking-wider leading-8 text-2xl">EXPERIENCE</p>
                <div class="w-full border-t-[3px] rounded-full border-t-sky-800"></div>
              </div>

              <div class="w-full space-y-3 text-xl flex flex-col pb-4">
                <div class="w-full pb-2 space-y-1">
                  <p class="text-neutral-400 text-[18px]">
                    January 2022 - October 2024
                  </p>
                  <p class="capitalize">superstar hollywood actor</p>
                  <p class="capitalize text-neutral-600 text-[18px]">
                    holly agency inc
                  </p>
                </div>

                <div class="w-full font-normal space-y-3">
                  <li class="pl-2 -indent-7 ml-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloremque modi nobis mollitia in distinctio similique
                    dolor, quisquam nesciunt ex labore quaerat quidem nisi
                    earum.
                  </li>
                  <li class="pl-2 -indent-7 ml-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestias id amet eligendi error, fugit et impedit
                    aspernatur quae sunt officiis nam iusto qui sapiente animi
                    dignissimos? Totam fuga
                  </li>
                  <li class="pl-2 -indent-7 ml-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloremque modi nobis mollitia in distinctio similique
                    dolor, quisquam nesciunt ex labore
                  </li>
                </div>
              </div>
              <div class="w-full space-y-3 text-xl flex flex-col pb-4">
                <div class="w-full pb-2 space-y-1">
                  <p class="text-neutral-400 text-[18px]">
                    January 2022 - October 2024
                  </p>
                  <p class="capitalize">superstar hollywood actor</p>
                  <p class="capitalize text-neutral-600 text-[18px]">
                    holly agency inc
                  </p>
                </div>

                <div class="w-full font-normal space-y-3">
                  <li class="pl-2 -indent-7 ml-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloremque modi nobis mollitia in distinctio similique
                    dolor, quisquam nesciunt ex labore quaerat quidem nisi
                    earum.
                  </li>
                  <li class="pl-2 -indent-7 ml-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestias id amet eligendi error, fugit et impedit
                    aspernatur quae sunt officiis nam iusto qui sapiente animi
                    dignissimos? Totam fuga
                  </li>
                  <li class="pl-2 -indent-7 ml-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloremque modi nobis mollitia in distinctio similique
                    dolor, quisquam nesciunt ex labore
                  </li>
                </div>
              </div>
            </div>

            <div class="w-full">
              <div class="pb-4 text-sky-800">
                <p class="tracking-wider leading-8 text-2xl">EDUCATION</p>
                <div class="w-full border-t-[3px] rounded-full border-t-sky-800"></div>
              </div>
              <div class="w-full space-y-3 text-xl grid grid-cols-2">
                <div class="w-full pb-2 space-y-1">
                  <p class="text-neutral-400 text-[18px] capitalize">
                    January 2011
                  </p>
                  <p class="capitalize">fine arts degree</p>
                  <p class="capitalize text-neutral-600 text-[18px]">
                    acting school
                  </p>
                </div>
                <div class="w-full pb-2 space-y-1">
                  <p class="text-neutral-400 text-[18px] capitalize">
                    June 2018
                  </p>
                  <p class="capitalize">fine arts degree</p>
                  <p class="capitalize text-neutral-600 text-[18px]">
                    acting school
                  </p>
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

  const browser = await puppeteer.launch();
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

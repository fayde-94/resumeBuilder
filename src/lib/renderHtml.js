// src/utils/renderHtml.js
import { renderToString } from "react-dom/server";
import { readFileSync } from "fs";
import { resolve } from "path";
import PuppeteerTemplate from "@/components/resume_templates/puppeteerTemplate";

export function renderHtml(data) {
  const tailwindCSS = readFileSync(resolve("./public/styles.css"), "utf8");

  const htmlContent = renderToString(<PuppeteerTemplate {...data} />);

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          ${tailwindCSS}
        </style>
      </head>
      <body>
        ${htmlContent}
      </body>
    </html>
  `;
}

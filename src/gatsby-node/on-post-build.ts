import fs from "node:fs";
import path from "node:path";
import type { GatsbyNode } from "gatsby";
import puppeteer from "puppeteer";

const PATH = "public/cv/index.html";
const OUT_PATH = "public/cv.pdf";

const generatePdf = async (pagePath: string, outPath: string) => {
  const browser = await puppeteer.launch({
    headless: "new",
  });
  const page = await browser.newPage();

  const cwd = process.cwd();
  const htmlPath = path.join(cwd, PATH);

  const contentHtml = fs.readFileSync(htmlPath, "utf8");

  await page.setContent(contentHtml);

  await page.pdf({
    path: outPath,
    displayHeaderFooter: false,
    preferCSSPageSize: true,
  });
  await browser.close();
};

const onPostBuild: GatsbyNode["onPostBuild"] = async () => {
  await generatePdf(PATH, OUT_PATH);
};

export default onPostBuild;

import { chromium } from "playwright";
import * as dotenv from "dotenv";
import * as path from "path";
import * as fs from "fs";
dotenv.config();

(async () => {
  try {
    const suiteID = process.env.SUITE_RUN_ID;
    if (!suiteID) {
      throw new Error("SUITE_RUN_ID is not defined");
    }

    const note = suiteID;
    const today = new Date();
    const dateString = today.toISOString().split("T")[0];
    const fileName = `${suiteID}-${dateString}.pdf`;

    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto(
      "https://app.bugbug.io/organizations/bc8f1cc9-851e-49c5-8d27-96cdbf9af513/projects/"
    );

    await page
      .getByPlaceholder("E-mail")
      .fill(process.env.BUGBUGUSERNAME as string);
    await page
      .getByPlaceholder("Password")
      .fill(process.env.BUGBUGPASSWORD as string);
    await page.getByTestId("LoginForm").getByTestId("Button").click();
    await page.waitForNavigation();
    await page.goto(
      `https://app.bugbug.io/organizations/bc8f1cc9-851e-49c5-8d27-96cdbf9af513/projects/whiz-connect-cd9e3f1f-32c3-44b4-a71f-2ef4e78b16c2/runs-history/suites/${suiteID}/`
    );
    await page.waitForNavigation();
    await page.getByLabel("Download PDF report").click();
    await page.getByTestId("TextArea").click();
    await page.getByTestId("TextArea").fill(note);
    await page.getByRole("button", { name: "Continue" }).click();

    await page.waitForTimeout(1000);
    console.log({suiteID})

    const pdfDir = path.join(process.cwd(), "downloaded-pdf");
    if (!fs.existsSync(pdfDir)) {
      fs.mkdirSync(pdfDir);
    }
    const pdfPath = path.join(pdfDir, fileName);

    await page.pdf({
      path: pdfPath,
      format: "A4",
    });

    await browser.close();

    console.log(`::set-output name=pdf_filename::${fileName}`);
  } catch (error) {
    console.error("Error during PDF generation:", error);
    process.exit(1); 
  }
})();

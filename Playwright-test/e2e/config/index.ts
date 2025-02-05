import * as dotenv from "dotenv";
import { resolve } from "path";

const env = process.env.env || "default";

dotenv.config({ path: resolve(__dirname, `${env}.env`) });

export const frontendBaseUrl =
  process.env.FRONTEND_BASE_URL;
export const email = process.env.EMAIL || "";
export const password = process.env.PASSWORD || "";
export const email_ppd = process.env.EMAIL_FLEET_PPD || "";
export const password_ppd= process.env.PASSWORD_FLEET_PPD || "";
export const loginAccounts = [
  {
    email: process.env.AMER_USER_EMAIL || "",
    password: process.env.AMER_USER_PASSWORD || "",
  },
  {
    email: process.env.AMER_ADMIN_EMAIL || "",
    password: process.env.AMER_ADMIN_PASSWORD || "",
  },
  {
    email: process.env.EMEA_USER_EMAIL || "",
    password: process.env.EMEA_USER_PASSWORD || "",
  },
  {
    email: process.env.EMEA_ADMIN_EMAIL || "",
    password: process.env.EMEA_ADMIN_PASSWORD || "",
  }
];
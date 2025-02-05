import axios from "axios";
import * as dotenv from "dotenv";
import crypto from "crypto";
import { email_ppd, password_ppd} from "../config";

dotenv.config();

export async function authenticate(): Promise<string> {
    const url = "https://api.formant.io/v1/admin/auth/login";
    const headers = {
      accept: "application/json",
      "content-type": "application/json",
    };
    const data = {
      email: email_ppd,
      password: password_ppd,
    };
     
    const response = await axios.post(url, data, { headers });
    return response.data.authentication.accessToken;
  }
  
  export async function authenticatedHeaders(): Promise<Record<string, string>> {
    return {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${await authenticate()}`,
    };
  }

export async function getRoles(): Promise<{ id: string; name: string }[]> {
  const url = "https://api.formant.io/v1/admin/roles/";
  const headers = await authenticatedHeaders();
  const resp = await axios.get(url, { headers });
  return resp.data.items.map((item: any) => ({
    id: item.id,
    name: item.name,
  }));
}

function randomEmail(prefix: string): string {
  const randomStr = crypto.randomBytes(4).toString("hex");
  return `test-${prefix}-${randomStr}@example.com`;
}

export async function createUser(roleName: string) {
  const roles = await getRoles();
  const role = roles.find((r) => r.name.toLowerCase() === roleName.toLowerCase());
  if (!role) throw new Error(`Role not found: ${roleName}`);
  const url = "https://api.formant.io/v1/admin/users";
  const data = {
    email: randomEmail("forgot-password-user"),
    firstName: "ForgotPasswordUser",
    lastName: "",   
    roleId: role.id,   
    tags: {},
    region: "AMER",
  };
  const headers = await authenticatedHeaders();
  console.log("User data:", data);
  const resp = await axios.post(url, data, { headers });
  return resp.data;
}

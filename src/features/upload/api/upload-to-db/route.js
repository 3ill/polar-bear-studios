import { ApiClient } from "@/lib/api.client";
import { UPLOAD_ROUTES } from "../../data/upload.data";

export async function uploadToDB(name, url, email) {
  const data = {
    name,
    url,
    email,
  };

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  return await ApiClient.post(UPLOAD_ROUTES.UPLOAD_ASSET, data, config);
}

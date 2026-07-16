import { ApiClient } from "@/lib/api.client";
import { UPLOAD_ROUTES } from "../../data/upload.data";

export async function getUserAssets(email) {
  const url = `${UPLOAD_ROUTES.GET_ASSET}?email=${email}`;

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  return await ApiClient.get(url, config);
}

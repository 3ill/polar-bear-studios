import { ApiClient } from "@/lib/api.client";
import { WAITLIST_ROUTES } from "../../data/waitlist.data";

export async function verifyWaitlist(email) {
  const url = `${WAITLIST_ROUTES.VERIFY}?email=${email}`;

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  return await ApiClient.get(url, config);
}

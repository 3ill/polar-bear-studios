import { ApiClient } from "@/lib/api.client";
import { WAITLIST_ROUTES } from "../../data/waitlist.data";

export async function addToWaitlist(email, firstName, lastName) {
  const data = {
    email: email,
    first_name: firstName,
    last_name: lastName,
  };

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return await ApiClient.post(WAITLIST_ROUTES.ADD_TO_WAITLIST, data, config);
}

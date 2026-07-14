import { ApiClient } from "@/lib/api.client";
import { WAITLIST_ROUTES } from "../../data/waitlist.data";

export async function addToWaitlist(email, firstName, lastName) {
  data = {
    email: email,
    firstName: firstName,
    lastName: lastName,
  };

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return await ApiClient.post(WAITLIST_ROUTES.ADD_TO_WAITLIST, data, config);
}

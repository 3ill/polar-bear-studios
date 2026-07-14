import { useMutation } from "@tanstack/react-query";
import { err, ok, ResultAsync } from "neverthrow";
import { addToWaitlist } from "../api/add-to-waitlist/route";

export const useAddToWaitlist = () => {
  return useMutation({
    mutationKey: ["addToWaitlist"],
    mutationFn: async ({ email, firstName, lastName }) => {
      const result = await ResultAsync.fromPromise(
        addToWaitlist(email, firstName, lastName),
        (error) => new Error(`Failed to add to waitlist: ${error.message}`)
      ).andThen((data) => {
        if ((data.status = 201)) {
          return ok(data);
        } else {
          return err(new Error(`Failed to add to waitlist: ${data.message}`));
        }
      });

      if (result.isErr()) {
        throw result.error;
      }

      return result.value;
    },
  });
};

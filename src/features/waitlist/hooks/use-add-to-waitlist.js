import { useMutation } from "@tanstack/react-query";
import { addToWaitlist } from "../api/add-to-waitlist/route";
import { err, ok, ResultAsync } from "neverthrow";

export const useAddToWaitlist = () => {
  return useMutation({
    mutationKey: ["addToWaitlist"],
    mutationFn: async ({ email, firstName, lastName }) => {
      const result = await ResultAsync.fromPromise(
        addToWaitlist(email, firstName, lastName),
        (error) => {
          return error;
        }
      ).andThen((data) => {
        return ok({ status: 201, ...data });
      });

      if (result.isErr()) {
        const error = result.error;
        return {
          status: error.status || 500,
          message: error.message || "An error occurred",
          data: error.data,
        };
      }

      return result.value;
    },
  });
};

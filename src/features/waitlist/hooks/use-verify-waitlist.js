import { useQuery } from "@tanstack/react-query";
import { ok, ResultAsync } from "neverthrow";
import { verifyWaitlist } from "../api/verify/route";

export const useVerifyWaitlist = (email) => {
  return useQuery({
    queryKey: [`verify-waitlist-${email}`],
    queryFn: async () => {
      const result = await ResultAsync.fromPromise(
        verifyWaitlist(email),
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

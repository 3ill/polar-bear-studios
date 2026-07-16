import { useQuery } from "@tanstack/react-query";
import { ok, ResultAsync } from "neverthrow";
import { getUserAssets } from "../api/get-asset/route";

export const useGetUserAssets = (email) => {
  return useQuery({
    queryKey: [`get-user-assets-${email}`],
    queryFn: async () => {
      const result = await ResultAsync.fromPromise(
        getUserAssets(email),
        (error) => error
      ).andThen((data) => {
        return ok({ status: 200, ...data });
      });

      if (result.isErr()) {
        const error = result.error;
        return {
          status: error.status || 500,
          message: error.message || "An error occurred",
          data: error.data,
        };
      }

      const assetLength = result.value.data.length || 0;

      return {
        status: result.value.status,
        data: result.value.data,
        assetLength: assetLength,
      };
    },
    enabled: !!email, // Only run the query if email is provided
  });
};

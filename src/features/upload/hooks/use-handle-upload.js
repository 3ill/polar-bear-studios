import { useMutation } from "@tanstack/react-query";
import { ResultAsync } from "neverthrow";
import { uploadToDB } from "../api/upload-to-db/route";

export const useHandleUpload = () => {
  return useMutation({
    mutationKey: ["handleUpload"],
    mutationFn: async ({ file, name, email }) => {
      const presignedResult = await ResultAsync.fromPromise(
        fetch("/api/upload", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ pathname: name }),
        }).then((res) => res.json()),
        (error) => new Error(`Failed to get presigned URL: ${error.message}`)
      );

      if (presignedResult.isErr()) {
        throw presignedResult.error;
      }

      const { presignedUrl } = presignedResult.value;

      const uploadResult = await ResultAsync.fromPromise(
        fetch(presignedUrl, {
          method: "PUT",
          body: file,
          headers: { "Content-Type": "application/zip" },
        }).then((res) => {
          if (!res.ok)
            throw new Error(`Upload failed with status ${res.status}`);
          return res.json();
        }),
        (error) => new Error(`Vercel Upload Failed: ${error.message}`)
      );

      if (uploadResult.isErr()) {
        throw uploadResult.error;
      }

      const vercelData = uploadResult.value;
      console.log("Upload successful, blob data:", vercelData);

      const dbResult = await ResultAsync.fromPromise(
        uploadToDB(name, vercelData.url, email),
        (error) => new Error(`Database Save Failed: ${error.message}`)
      );

      if (dbResult.isErr()) {
        throw dbResult.error;
      }

      return {
        vercel: vercelData,
        db: dbResult.value,
      };
    },
  });
};

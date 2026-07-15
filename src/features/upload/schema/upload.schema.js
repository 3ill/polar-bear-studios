import { z } from "zod";

const ACCEPTED_EXTENSIONS = [".gltf", ".glb"];
const MAX_FILE_SIZE_MB = 100;
const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;

const hasAcceptedExtension = (fileName = "") =>
  ACCEPTED_EXTENSIONS.some((extension) =>
    fileName.toLowerCase().endsWith(extension)
  );

export const uploadSchema = z.object({
  name: z.string().min(1, "File name is required"),
  model: z
    .instanceof(FileList, { message: "Please select a file" })
    .refine((files) => files?.length === 1, "Please select a file")
    .refine(
      (files) => files?.[0] && hasAcceptedExtension(files[0].name),
      "Only .gltf and .glb files are allowed"
    )
    .refine(
      (files) => files?.[0] && files[0].size <= MAX_FILE_SIZE_BYTES,
      `File size must be less than ${MAX_FILE_SIZE_MB}MB`
    ),
});

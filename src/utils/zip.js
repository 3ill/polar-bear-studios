import JSZip from "jszip";

/**
 * Zips a file and returns a Promise resolving to a Blob representing the zip file.
 * @param {File} file - The file to zip.
 * @returns {Promise<Blob>}
 */
export async function zipFile(file) {
  const zip = new JSZip();
  const fileData = await file.arrayBuffer();
  zip.file(file.name, fileData);
  return await zip.generateAsync({ type: "blob" });
}

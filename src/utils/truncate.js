export const getTruncatedName = (name, maxLength = 30) => {
  if (!name) return "";
  if (name.length <= maxLength) return name;
  const extensionIndex = name.lastIndexOf(".");
  if (extensionIndex !== -1 && name.length - extensionIndex < 10) {
    const ext = name.substring(extensionIndex);
    const base = name.substring(0, extensionIndex);
    const remainingLength = maxLength - ext.length - 3;
    if (remainingLength > 0) {
      return base.substring(0, remainingLength) + "..." + ext;
    }
  }
  return name.substring(0, maxLength - 3) + "...";
};

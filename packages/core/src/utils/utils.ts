export function removeExtensionFromFilename(filename: string): string {
  const lastDotIndex = filename.lastIndexOf('.');
  if (lastDotIndex === -1) {
    // No extension found, return the original filename as is
    return filename;
  } else {
    // Remove the extension and return the filename
    return filename.slice(0, lastDotIndex);
  }
}

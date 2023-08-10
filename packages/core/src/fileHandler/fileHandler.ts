import path from 'path';
import fs from 'fs/promises';
import { removeExtensionFromFilename } from '../utils/utils';

const pagesDirPath = '../packages/client/src/pages';

export async function searchFilesInDirectory(pathName: string) {
  try {
    if (!pathName) {
      throw Error(`Invalid Pathname at getMatchedPage`);
    }

    const pagesDir = path.join(__dirname, pagesDirPath);
    const pages = await fs.readdir(pagesDir);
    if (pathName === '/') {
      return pages?.find(
        (page) => removeExtensionFromFilename(page).toLowerCase() === 'index'
      );
    }
    return pages?.find(
      (page) =>
        removeExtensionFromFilename(page).toLowerCase() ===
        pathName?.substring(1)?.toLowerCase()
    );
  } catch (error) {
    console.error('error occurred!!! ', error.message);
    return null;
  }
}

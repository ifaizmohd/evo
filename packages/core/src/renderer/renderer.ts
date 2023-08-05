import { searchFilesInDirectory } from '../fileHandler/fileHandler';
import Logger from '@evo/logger';

interface Page {
  getServerSideProps?: Function;
  getStaticProps?: Function;
  default: Function;
}

export async function getRenderableComponent(pathName: string) {
  let component: Page;
  let props = {};
  try {
    const file = await searchFilesInDirectory(pathName);
    Logger.info('pages - ', file);
    if (file) {
      component = await import(`@evo/client/pages/${file}`);
      if (component && component.getServerSideProps) {
        props = component.getServerSideProps();
      }
      return {
        Component: component.default,
        props,
      };
    }
  } catch (error) {
    Logger.error('error!!', error.message);
  }
  return null;
}

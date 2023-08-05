import React, { FC } from 'react';

interface AppProps {
  Component?: FC;
  path?: string;
  props?: Object;
}

const App: FC<AppProps> = ({ props }) => {
  return <div />;
};

export default App;

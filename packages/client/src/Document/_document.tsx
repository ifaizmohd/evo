import React, { FC } from 'react';

interface DocumentProps {
  path?: string;
  Component?: any;
  props?: any;
  isServer?: boolean;
}

const EvoDocument: FC<DocumentProps> = ({ Component, path, props }) => {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <div id="root">
          <Component props={...props} path={path} />
        </div>
      </body>
    </html>
  );
};

export default EvoDocument;

import React, { FC } from 'react';
import axios, { AxiosResponse } from 'axios';
import { renderToPipeableStream } from "react-dom/server";
import { Request, Response } from "express";
import Logger from '@evo/logger';
import EvoDocument from '@evo/client/src/Document/_document'
import { searchFilesInDirectory } from '../fileHandler/fileHandler';

interface Page {
  getServerSideProps?: Function;
  getStaticProps?: Function;
  getInitialProps?: Function;
  default?: FC<any>;
}

const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

export async function getRenderableComponent(pathName: string) {
  let Component: FC<any> | undefined;
  let props: AxiosResponse | undefined;
  try {
    // Retrieve the matched page based on the path name
    const page = await searchFilesInDirectory(pathName);

    if (page) {
      // Dynamically import the page component
      const module: Page = await import(`@evo/client/src/pages/${page}`);
      const pageComponent = module.default;
      // Check if the page component has a getInitialProps function
      if (module && module.getInitialProps) {
        // Retrieve the initial props for the component
        const { props: initialProps } = await module.getInitialProps(
          axiosInstance
        );
        props = initialProps;
      }

      Component = pageComponent;
    }
  } catch (error) {
    Logger.error('error!!', error.message);
  }
  // Return the page component and initial props
  return { Component, props };
}

export async function renderToNodeStream(req: Request,
  res: Response,
  Component: FC<any>,
  props: Object) {
    const { pipe } = renderToPipeableStream(<EvoDocument Component={Component} />, {});
  }

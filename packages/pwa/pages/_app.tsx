/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import App, { AppInitialProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@budyay/ui';

class BudyayApp extends App {
  static async getInitialProps({ Component, ctx }): Promise<AppInitialProps> {
    let pageProps: any = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render(): React.ReactElement {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>Budyay: Connecting buddies</title>
          <meta name="Description" content="Budyay: Connecting buddies" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="manifest" href="/manifest.json" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Work+Sans:wght@700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    );
  }
}

export default BudyayApp;

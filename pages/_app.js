import React from "react";
import '../styles/globals.css'
import '../styles/tailwind.css'
import 'animate.css'
import Layout from "../layouts";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
      <Layout>
          <Head>
              <link rel="icon" href="/favicon.ico" />
          </Head>
        <Component {...pageProps} />
      </Layout>
  )
}

export default MyApp

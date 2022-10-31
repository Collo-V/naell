import React from "react";
import '../styles/globals.css'
import '../styles/tailwind.css'
import 'animate.css'
import Layout from "../layouts";
import Head from "next/head";
import {Provider} from "react-redux";
import {store} from "../store";

function MyApp({ Component, pageProps }) {
  return (
      <Provider store={store}>
          <Layout>
              <Head>
                  <link rel="icon" href="/favicon.ico" />
              </Head>
              <Component {...pageProps} />
          </Layout>
      </Provider>
  )
}

export default MyApp

import React from "react";
import '../styles/globals.css'
import '../styles/tailwind.css'
import 'animate.css'
import Layout from "../layouts";

function MyApp({ Component, pageProps }) {
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  )
}

export default MyApp

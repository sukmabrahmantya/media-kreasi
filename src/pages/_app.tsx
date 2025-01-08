import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme/theme";

import "../theme/global.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Head from "next/head";


function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <Head>
        <link rel="icon" href="/logo.ico" /> {/* Replace with your icon path */}
        <title>Media Kreasi</title>
      </Head>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>

  );
}

export default MyApp;

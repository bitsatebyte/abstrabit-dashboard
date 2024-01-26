import type { AppProps } from "next/app";
import { createGlobalStyle } from "styled-components";

import Layout from '@/components/Layout';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Apercu';
    src: url('fonts/apercu_regular_pro.otf');
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Apercu';
  }

  html, body {
    max-width: 1366px;
    overflow-x: hidden;
    font-size: 10px;
    margin: auto;
  }

  main {
    background-color: #F7F8FA;
    padding: 2.3rem 6rem 3rem 6rem;
  }
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

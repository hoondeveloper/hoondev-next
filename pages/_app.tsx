/** @jsxImportSource @emotion/react */
import type { AppProps } from 'next/app';
import { GlobalStyles as TwGlobal } from 'twin.macro';
import GlobalStyles from '../styles/GlobalStyles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <TwGlobal />
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;

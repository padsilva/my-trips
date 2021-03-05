import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyle from 'styles/global'

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>My Trips</title>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#ffffff" />
      <meta
        name="description"
        content="A simple project to show some of my trips"
      />
    </Head>
    <GlobalStyle />
    <Component {...pageProps} />
  </>
)

export default App

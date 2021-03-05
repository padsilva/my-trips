import { AppProps } from 'next/app'
import Head from 'next/head'
import GithubCorner from 'react-github-corner'

import GlobalStyle from 'styles/global'

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Boilerplate TypeScript</title>
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
        content="A boilerplate to work with TypeScript, React, NextJS and Styled Components"
      />
    </Head>
    <GlobalStyle />
    <Component {...pageProps} />
    <GithubCorner
      href="https://github.com/padsilva/nextjs-boilerplate-ts"
      bannerColor="#fff"
      octoColor="#000"
      target="_blank"
      rel="noopener"
    />
  </>
)

export default App

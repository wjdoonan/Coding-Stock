import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.svg" />
        <title>Coding Stock</title>
        <script src="https://kit.fontawesome.com/536dad5a0d.js" crossorigin="anonymous"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

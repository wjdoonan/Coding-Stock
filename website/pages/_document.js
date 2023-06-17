import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script src="https://kit.fontawesome.com/536dad5a0d.js" crossorigin="anonymous"></script>
        <link rel='icon' href='favicon.svg' />
        <title>Coding Stock</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

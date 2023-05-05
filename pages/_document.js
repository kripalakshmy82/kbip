import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      
      <Head>

      <link  rel="stylesheet" href="/css/style.css" />
    <link  rel="stylesheet" href="/css/site.css"  />
    <link  rel="stylesheet" href="/css/font-awesome.css"  />
    {/* <link  rel="stylesheet" href="/css/bootstrap.min.css" /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
<script src="/js/jquery.min.js"></script>
<script src="/js/bootstrap.min.js"></script>
<script src="/js/jquery.bootstrap.newsbox.min.js"></script>
      </body>
    </Html>
  )
}
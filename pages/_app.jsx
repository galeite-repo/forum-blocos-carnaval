import '../styles/globals.scss'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Blocos de Rua M'Boi</title>
        <meta name="description" content="Fórum dos Blocos de Rua de M'Boi Mirim | Zona Sul/SP." />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

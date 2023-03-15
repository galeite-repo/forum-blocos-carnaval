
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel='preconnect' href='https://fonts.googleapis.com' />
                <link
                    rel='preconnect'
                    href='https://fonts.gstatic.com'
                    crossOrigin='true'
                />
                <link
                    href='https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap'
                    rel='stylesheet'
                />
                <title>Blocos de Rua M'Boi</title>
                <meta name="description" content="Fórum dos Blocos de Rua de M'Boi Mirim | Zona Sul/SP." />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
import '@/styles/global.css'
import Header from '@/components/Header'
import Container from '@/components/Container'
import { ThemeProvider } from '@/lib/ ThemeContext'
import Head from 'next/head'
import Footer from '@/components/Footer'

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>Codeitmall</title>
      <link rel='icon' href='/favicon.ico'/>
    </Head>
    <ThemeProvider>
    <Header/>
    <Container>
      <Component {...pageProps} />
    </Container>
    <Footer/>
    </ThemeProvider>
  </>
  )
}

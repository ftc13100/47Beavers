import { AppProps } from 'next/app'
import NavBar from '../components/navbar'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

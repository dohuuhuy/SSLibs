import '@assets/styles/app.scss'
import type { AppProps } from 'next/app'
import 'sslibs/dist/index.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

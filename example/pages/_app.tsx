import type { AppProps } from 'next/app'
import React from 'react'
import 'calendar-lunar/dist/index.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />
}

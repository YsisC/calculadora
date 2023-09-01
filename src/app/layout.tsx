import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from '../redux/providers'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Calculadora',
  description: 'Reto Tecnico',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link type="image/png" sizes="16x16" rel="icon" href=".../icons8-chuck-norris-16.png"></link>
      <body  suppressHydrationWarning={true} className={inter.className}>
      
        <Providers>
        {children}
        </Providers>
        </body>
    </html>
  )
}

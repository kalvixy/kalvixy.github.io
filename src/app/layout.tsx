import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './ui/globals.css'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'the fukuda',
  description: 'Welcome to the website of John Fukuda',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Providers>
        {children}
      </Providers>
    </html>
  )
}

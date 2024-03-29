import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Github } from 'lucide-react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Desbravador desafio',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="antialiased ">
      <body className={`bg-slate-950 ${inter.className}`}>{children}</body>
    </html>
  )
}

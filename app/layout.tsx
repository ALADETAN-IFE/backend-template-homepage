import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: 'Backend Template Generator | Production-Ready Express API Scaffolding',
  description: 'Generate production-ready Node.js backend APIs with Express.js. Support for TypeScript, JavaScript, monolith and microservices, Docker, PM2, authentication, and security features.',
  icons: {
    icon: [
      {
        // url: 'https://res.cloudinary.com/dserpv6p5/image/upload/v1751683818/logo_xvh2e3.png',
        // url: 'https://res.cloudinary.com/dserpv6p5/image/upload/v1768894350/pa30oql4puxb7soelamn.jpg',
        url: 'https://res.cloudinary.com/dserpv6p5/image/upload/v1768904987/ta86tuh6s5wledi2hkkg.png',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark ${geist.variable} ${geistMono.variable}`}>
      <body className={`font-sans antialiased bg-background text-foreground`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

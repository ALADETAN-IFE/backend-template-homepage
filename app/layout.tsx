import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" });

// Optimized icon served by Cloudinary: auto-format, auto quality, scaled for metadata
const iconUrl = 'https://res.cloudinary.com/dserpv6p5/image/upload/f_auto,q_auto,w_128/v1768904987/ta86tuh6s5wledi2hkkg.png'

export const metadata: Metadata = {
  title: 'Backend Template Generator | Production-Ready Express API Scaffolding',
  description: 'Generate production-ready Node.js backend APIs with Express.js. Support for TypeScript, JavaScript, monolith and microservices, Docker, PM2, authentication, and security features.',
  icons: {
    icon: [
      {
        url: iconUrl,
        sizes: '128x128',
        type: 'image/png',
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
      <head>
        <link rel="preload" href={iconUrl} as="image" />
      </head>
      <body className={`font-sans antialiased bg-background text-foreground`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

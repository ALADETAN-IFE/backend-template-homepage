'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function DiscussionPage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Clear any existing giscus script first
    const existingScript = document.querySelector('script[src="https://giscus.app/client.js"]')
    if (existingScript) {
      existingScript.remove()
    }
    
    const script = document.createElement('script')
    script.src = 'https://giscus.app/client.js'
    script.setAttribute('data-repo', process.env.NEXT_PUBLIC_GISCUS_REPO || 'ALADETAN-IFE/ifecodes-backend-temlate-discussions')
    script.setAttribute('data-repo-id', process.env.NEXT_PUBLIC_GISCUS_REPO_ID || 'R_kgDOQ9O8Nw')
    script.setAttribute('data-category', process.env.NEXT_PUBLIC_GISCUS_CATEGORY || 'General')
    script.setAttribute('data-category-id', process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID || 'DIC_kwDOQ9O8N84C1LMT')
    // script.src = 'https://giscus.app/client.js'
    // script.setAttribute('data-repo', 'ALADETAN-IFE/ifecodes-backend-temlate-discussions')
    // script.setAttribute('data-repo-id', 'R_kgDOQ9O8Nw')
    // // script.setAttribute('data-category', 'Announcements')
    // script.setAttribute('data-category', 'General')
    // // script.setAttribute('data-category-id', 'DIC_kwDOQ9O8N84C1LMS')
    // script.setAttribute('data-category-id', 'DIC_kwDOQ9O8N84C1LMT')
    // script.setAttribute('data-mapping', 'pathname')
    // script.setAttribute('data-strict', '0')
    // script.setAttribute('data-reactions-enabled', '1')
    // script.setAttribute('data-emit-metadata', '0')
    // script.setAttribute('data-input-position', 'top')
    // script.setAttribute('data-theme', 'preferred_color_scheme')
    // script.setAttribute('data-lang', 'en')
    // script.setAttribute('data-loading', 'lazy')
    script.setAttribute('data-mapping', 'pathname')
    script.setAttribute('data-strict', '0')
    script.setAttribute('data-reactions-enabled', '1')
    script.setAttribute('data-emit-metadata', '1')
    script.setAttribute('data-input-position', 'top')
    script.setAttribute('data-theme', 'preferred_color_scheme')
    script.setAttribute('data-lang', 'en')
    script.setAttribute('data-loading', 'lazy')
    script.crossOrigin = 'anonymous'
    script.async = true

    const container = document.querySelector('.giscus-container')
    if (container) {
      container.appendChild(script)
    }

    // Listen for Giscus ready event
    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== 'https://giscus.app') return
      if (event.data && event.data.giscus && event.data.giscus.discussion) {
        setTimeout(() => {
          setIsLoading(false)
        }, 3500);
      }
    }

    // // Also check for giscus iframe periodically as fallback
    // const checkGiscusLoaded = setInterval(() => {
    //   const giscusFrame = document.querySelector('iframe.giscus-frame')
    //   if (giscusFrame) {
    //     setTimeout(() => {
    //       setIsLoading(false)
    //     }, 3000);
    //     clearInterval(checkGiscusLoaded)
    //   }
    // }, 500)

    window.addEventListener('message', handleMessage)

    // Timeout fallback - hide loading after 5 seconds
    const timeout = setTimeout(() => {
      setIsLoading(false)
      // clearInterval(checkGiscusLoaded)
    }, 5000)

    return () => {
      window.removeEventListener('message', handleMessage)
      // clearInterval(checkGiscusLoaded)
      clearTimeout(timeout)
      // Cleanup: remove script on unmount
      const scriptToRemove = document.querySelector('script[src="https://giscus.app/client.js"]')
      if (scriptToRemove) {
        scriptToRemove.remove()
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border/50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-accent to-accent/60 rounded flex items-center justify-center font-bold text-primary text-sm">
              B
            </div>
            <Link href="/" className="font-semibold text-lg hidden sm:inline hover:text-accent transition">
              Backend Template
            </Link>
          </div>
          <Link
            href="/"
            className="text-sm text-muted-foreground hover:text-foreground transition"
          >
            ← Back to Home
          </Link>
        </div>
      </nav>

      {/* Content */}
      <section className="pt-32 pb-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Discussions</h1>
            <p className="text-muted-foreground">
              Ask questions, share ideas, and get help from the community.
            </p>
          </div>

          {/* Giscus Comments */}
          {isLoading && (
            <div className="flex flex-col items-center justify-center py-16 space-y-4">
              <div className="w-12 h-12 border-4 border-accent/30 border-t-accent rounded-full animate-spin" />
              <p className="text-muted-foreground">Loading discussions...</p>
            </div>
          )}
          <div className={`giscus-container ${isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'}`} />
        </div>
      </section>
    </div>
  )
}

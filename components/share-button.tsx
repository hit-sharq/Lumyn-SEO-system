'use client'

import { Share2, Check } from 'lucide-react'
import { useState } from 'react'

export function ShareButton({ url, title }: { url: string; title: string }) {
  const [copied, setCopied] = useState(false)
  const share = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title, url })
        return
      } catch (e) {
        if ((e as Error).name !== 'AbortError') console.warn('Web Share failed', e)
      }
    }
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (e) {
      console.error('Clipboard write failed', e)
    }
  }
  return (
    <button className="share-btn" onClick={share} aria-label="Share article">
      {copied ? <Check size={16} /> : <Share2 size={16} />}
      {copied ? ' Copied!' : ' Share'}
    </button>
  )
}
'use client'

import { useEffect } from 'react'

export default function RevealObserver() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal:not(.in-view)')
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('in-view'))
      return
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            obs.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    )
    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return null
}

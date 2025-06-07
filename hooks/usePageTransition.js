'use client'

import { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'

export const usePageTransition = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  // Initial load handling
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000) // Show loader for 1 seconds on initial load

    return () => clearTimeout(timer)
  }, [])

  // Navigation transition handler
  const navigateWithTransition = (href) => {
    setIsTransitioning(true)
    
    setTimeout(() => {
      router.push(href)
      setTimeout(() => {
        setIsTransitioning(false)
      }, 500)
    }, 300)
  }

  return {
    isLoading: isLoading || isTransitioning,
    navigateWithTransition,
    isTransitioning
  }
}
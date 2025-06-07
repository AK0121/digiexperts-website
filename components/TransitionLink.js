'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePageTransition } from "../hooks/usePageTransition.js"

const TransitionLink = ({ 
  href, 
  children, 
  className = '', 
  onClick, 
  ...props 
}) => {
  const { navigateWithTransition } = usePageTransition()

  const handleClick = (e) => {
    e.preventDefault()
    if (onClick) onClick(e)
    navigateWithTransition(href)
  }

  return (
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
      <Link
        href={href}
        onClick={handleClick}
        className={className}
        {...props}
      >
        {children}
      </Link>
    </motion.div>
  )
}

export default TransitionLink
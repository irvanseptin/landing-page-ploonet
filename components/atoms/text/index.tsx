import React from 'react'
import { TextProps } from './text.interface'

const Text: React.FC<TextProps> = ({
  variant = 'p',
  children,
  className = '',
  isPrimary,
  style = {},
  ...props
}) => {
  const baseClass = {
    h1: 'text-2xl md:text-[44px]',
    h2: 'text-3xl font-semibold',
    h3: 'text-base md:text-2xl',
    h4: 'text-xl',
    p: 'text-base',
    span: 'text-sm',
    small: 'text-xs',
  }

  const Component = variant as keyof JSX.IntrinsicElements

  return (
    <Component
      className={`${baseClass[variant]} ${className}`}
      style={isPrimary ? {
        background: 'linear-gradient(96.34deg, #FF4E83 0.62%, #FFBB54 97.92%)',
        WebkitBackgroundClip: 'text',
      } : style}
      {...props}
    >
      {isPrimary ? (
        <span
          className="bg-clip-text text-transparent"
          style={{
            background: 'linear-gradient(96.34deg, #FF4E83 0.62%, #FFBB54 97.92%)',
            WebkitBackgroundClip: 'text',
          }}
        >
          {children}
        </span>
      ) : children}
    </Component>
  )
}

export default Text

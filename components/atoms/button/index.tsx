import React from 'react'
import { ButtonProps } from './button.interface'

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  children,
  onClick,
  className = '',
  disabled = false,
  color,
  ...props
}) => {
  const baseClasses = 'md:inline-flex items-center font-semibold rounded focus:outline-none transition'

  const colorButton = color ? color.includes('#') ? `[${color}]` : color : ''
  const variantClasses = {
    primary: 'bg-[#FF6D51] px-8 py-4 text-white hover:bg-[#d0391d] disabled:bg-[#ee7e69]',
    text: `${color && `text-${colorButton}`} hover:text-white`,
  }

  const sizeClasses = {
    small: 'text-sm px-3 py-1',
    medium: 'text-base px-4 py-2',
    large: 'text-lg px-5 py-3',
  }

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

  return (
    <button onClick={onClick} className={classes} disabled={disabled} {...props}>
      {children}
    </button>
  )
}

export default Button

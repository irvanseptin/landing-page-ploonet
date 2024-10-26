import React from 'react'
import { InputProps } from './input.interface'

const Input: React.FC<InputProps> = ({
  placeholder,
  className,
  ...props
}) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={`w-full rounded-[10px] border border-[1px] border-[#FFFFFF26] bg-[#141414] text-white placeholder-[#FFFFFF99] px-8 py-4 focus:outline-none focus:border-[#FF4E83] ${className}`}
      {...props}
    />
  )
}

export default Input

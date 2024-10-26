import React from 'react'
import { TextareaProps } from './textarea.interface'

const Textarea: React.FC<TextareaProps> = ({
  placeholder,
  className,
  ...props
}) => {
  return (
    <textarea
      placeholder={placeholder}
      className={`w-full rounded-[10px] border border-[1px] border-[#FFFFFF26] bg-[#141414] text-white placeholder-[#FFFFFF99] px-8 py-4 focus:outline-none focus:border-[#FF4E83] h-[278px] ${className}`}
      {...props}
    />
  )
}

export default Textarea

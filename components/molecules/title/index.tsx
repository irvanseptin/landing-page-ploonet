import React from 'react'
import Text from '@/components/atoms/text'
import IconDot from '@/public/icons/dot.svg'
import { TitleProps } from './title.interface'

const Title: React.FC<TitleProps> = ({
  title,
  isWithDot,
  subTitleTop,
  className,
}) => {
  return (
    <>
      {subTitleTop && <Text variant="h3" className="mb-4" isPrimary>{subTitleTop}</Text>}
      <div className="relative flex justify-center items-flex-start">
        {isWithDot && <IconDot width={16} height={16}/>}
        <Text variant="h1" className={`text-center pb-8 ${className}`}>
          {title}
        </Text>
      </div>
    </>
  )
}

export default Title

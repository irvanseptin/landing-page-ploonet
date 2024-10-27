import React from 'react'
import Text from '@/components/atoms/text'
import IconDot from '@/public/icons/dot.svg'
import { TitleProps } from './title.interface'

const Title: React.FC<TitleProps> = ({
  title,
  isWithDot,
  subTitleTop,
  className,
  isSubTitleTopMobile,
}) => {
  return (
    <>
      {subTitleTop && <Text variant="h3" className={`mb-4 ${!isSubTitleTopMobile && 'hidden md:block'}`} isPrimary>{subTitleTop}</Text>}
      <div className="relative flex justify-center items-flex-start">
        {isWithDot && (<IconDot className="w-[8px] h-[8px] md:w-[16px] md:h-[16px]" />)}
        <Text variant="h1" className={`text-center pt-1 md:pt-4 pb-8 ${className}`}>
          {title}
        </Text>
      </div>
    </>
  )
}

export default Title

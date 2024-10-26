import React, { useState } from 'react'
import Text from '@/components/atoms/text'
import Title from '@/components/molecules/title'
import IconPolygon from '@/public/icons/polygon.svg'

import { CardProps } from './card.interface'

const Card: React.FC<CardProps> = ({
  title,
  leftCardTitle,
  leftCardSubTitle,
  rightCardTitle,
  rightCardSubTitle,
  leftSteps,
  rightSteps,
  footnotes,
}) => {
  return (
    <div className="bg-black py-4 pt-52 pb-52 text-center">
      <Title title={title} isWithDot className="font-semibold mb-6"/>

      <div className="flex flex-col w-full md:w-[1610px] mx-auto md:flex-row gap-8">
        {/* First Card */}
        <div className="flex-1 bg-[#141414] border border-[#FFFFFF26] rounded-[20px] p-[3px]">
          <div className=" p-24 pb-10">
            <Text variant="h1">{leftCardTitle}</Text>
            <Text variant="h3" className="mt-3 font-light">{leftCardSubTitle}</Text>
          </div>

          {leftSteps?.map((step, index) => (
            <div className="w-full md:w-[90%] mx-auto px-8 pb-3 items-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-black border border-[#FFFFFF26] rounded-full px-16 py-2">
                <div className="col-span-1 text-white p-4 items-center justify-center">
                  <h2 className="text-xl font-bold text-left bg-gradient-to-r from-[#FF7E7E] to-[#F05F82] bg-clip-text text-transparent">{step?.label}</h2>
                  <Text variant="h3" className="text-xl text-left font-bold">{step?.title}</Text>
                </div>
                <div className="col-span-2 text-white p-4 flex items-center justify-left">
                  <Text variant="p" className="text-left text-[#AAAAAA]">
                    {step?.description}
                  </Text>
                </div>
              </div>
              <div className="flex justify-center">
                {index < leftSteps.length -1 && <IconPolygon /> }
              </div>
            </div>
          ))}

        </div>

        {/* Second Card */}
        <div className="flex-1 relative inline-flex items-center justify-center rounded-[20px] p-[3px]">
          <div
            className="absolute inset-0 rounded-[20px]"
            style={{
              background: 'linear-gradient(96.34deg, #FF4E83 0.62%, #FFBB54 100%)',
              WebkitMask: 'linear-gradient(#141414, #141414)',
              WebkitMaskComposite: 'destination-out',
            }}
          />
          <div className="relative bg-[#141414] w-full h-full rounded-[20px] p-24 justify-center">
            <div className="pb-12">
              <Text variant="h1" isPrimary>{rightCardTitle}</Text>
              <Text variant="h3" className="mt-3 font-bold">{rightCardSubTitle}</Text>
            </div>

            {rightSteps?.map((step, index) => (
              <div className="w-full mx-auto pb-1 items-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-2">
                  <div className="col-span-1 text-white p-4 items-center justify-center">
                    <div className="flex-1 relative w-[134px] h-[134px] inline-flex items-center justify-center rounded-[20px] p-[3px]">
                      <div
                        className="absolute inset-0 rounded-[20px]"
                        style={{
                          background: 'linear-gradient(96.34deg, #FF4E83 0.62%, #FFBB54 100%)',
                          WebkitMask: 'linear-gradient(#141414, #141414)',
                          WebkitMaskComposite: 'destination-out',
                        }}
                      />
                      <div className="relative">
                        <Text variant="h2" className="text-xl font-bold text-center text-white font-light">{step?.label}</Text>
                        <div className="flex justify-center">{step?.icon}</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-2 text-white p-4 flex flex-col items-left justify-center text-left">
                    <Text variant="h2" className="text-xl text-left text-white font-bold !important">{step?.title}</Text>
                    <Text variant="p" className="text-left text-[#CCCCCC] pt-5">
                      {step?.description}
                    </Text>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-2">
                  <div className="col-span-1" />
                  <div className="col-span-2 w-full">
                    {index < rightSteps.length -1 && <div className=" w-full border-solid border-t-[1px] border-[#FFFFFF26]" /> }
                  </div>
                </div>
              </div>
              ))}
          </div>
        </div>
      </div>
      <Text variant="p" className="text-[#999999] py-12">
        {footnotes}
      </Text>
    </div>
  )
}

export default Card
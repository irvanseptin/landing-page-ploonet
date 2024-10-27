import Text from "@/components/atoms/text"
import { GradientCircleProps } from "./gradientCircle.interface"

const GradientCircle: React.FC<GradientCircleProps>   = ({
  title,
  subTitle,
}) => {
  return (
    <div className="relative inline-flex mx-auto items-center justify-center w-[84px] h-[84px] md:w-[211px] md:h-[211px] rounded-full p-[1px]">
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: 'linear-gradient(96.34deg, #FF4E83 0.62%, #FFBB54 100%)',
          WebkitMask: 'linear-gradient(#141414, #141414)',
          WebkitMaskComposite: 'destination-out',
        }}
      />
      <div className="relative bg-[#141414] w-full h-full rounded-full flex mx-auto items-center justify-center">
        <div className="text-center max-w-full md:max-w-[70%] mx-auto">
          <Text isPrimary variant="h2" className="text-[16px]/[16px] md:text-[32px]/[32px]">{title}</Text>
          <Text isPrimary variant="h3" className="opacity-60 hidden md:block">{subTitle}</Text>
        </div>
      </div>
    </div>
  )
}

export default GradientCircle

import Image from 'next/image'
import { BannerProps } from './banner.interface'

const Banner: React.FC<BannerProps>  = ({
  src,
  alt,
}) => {
  return (
    <div className="relative w-full h-[361px] md:h-[934px]">
      <Image
        src={src}
        alt={alt}
        layout="fill" 
        objectFit="cover"
        className="z-0"
      />
    </div>
  )
}

export default Banner

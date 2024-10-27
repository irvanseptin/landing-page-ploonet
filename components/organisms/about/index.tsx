import GradientCircle from "@/components/molecules/gradientCircle"
import Title from '@/components/molecules/title'

import { AboutProps } from "./about.interface"

const About: React.FC<AboutProps> = ({
  title,
  subTitle,
  infos,
  children,
}) => {
  return (
    <div className="bg-black pb-10 md:pb-20">
      <div className="bg-black w-full md:w-[844px] mx-auto p-6 text-center pt-24">
        <Title title={title} subTitleTop={subTitle} />
      </div>

      <div className="w-full flex justify-center items-center"> 
        <div className="flex justify-center">
          {infos.map((info, index) => (
            <GradientCircle key={index} title={info.title} subTitle={info?.subTitle} />
          ))}
        </div>
      </div>

      {children}
    </div>
  )
}

export default About

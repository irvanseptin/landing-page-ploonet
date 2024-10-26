import GradientCircle from "@/components/molecules/gradientCircle"
import Text from "@/components/atoms/text"
import Title from '@/components/molecules/title'

import { AboutProps } from "./about.interface";

const About: React.FC<AboutProps> = ({
  title,
  subTitle,
  infos,
  children,
}) => {
  return (
    <div className="bg-black pb-20">
      <div className="bg-black w-[337px] md:w-[844px] mx-auto p-6 text-center pt-24">
        <Title title={title} subTitleTop={subTitle} />
      </div>

      <div className="mx-auto text-center">
        {infos.map(info => (
          <GradientCircle title={info.title} subTitle={info?.subTitle} />
        ))}
      </div>

      {children}
    </div>
  );
};

export default About;

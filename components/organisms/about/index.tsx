import GradientCircle from "@/components/molecules/gradientCircle"
import Text from "@/components/atoms/text"

import { AboutProps } from "./about.interface";

const About: React.FC<AboutProps> = ({
  title,
  subTitle,
  infos,
  children,
}) => {
  return (
    <div className="bg-black pb-20">
      <div className="bg-black w-[337px] md:w-[844px] mx-auto p-6 text-center pt-24 pb-12">
        <Text variant="h3" className="mb-4" isPrimary>{title}</Text>
        <Text variant="h1">{subTitle}</Text>
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

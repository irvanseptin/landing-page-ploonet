import Text from "@/components/atoms/text"
import { GradientCircleProps } from "./gradientCircle.interface";

const GradientCircle: React.FC<GradientCircleProps>   = ({
  title,
  subTitle,
}) => {
  return (
    <div className="relative inline-flex items-center justify-center w-[211px] h-[211px] rounded-full p-[1px]">
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: 'linear-gradient(96.34deg, #FF4E83 0.62%, #FFBB54 100%)',
          padding: '10px',
          WebkitMask: 'linear-gradient(#141414, #141414)',
          WebkitMaskComposite: 'destination-out',
        }}
      />
      <div className="relative z-10 bg-[#141414] w-full h-full rounded-full flex items-center justify-center">
        <div>
          <Text isPrimary variant="h2">{title}</Text>
          <Text isPrimary variant="h3">{subTitle}</Text>
        </div>
      </div>
    </div>
  );
};

export default GradientCircle;

import Lottie from "lottie-react";
import { FC } from "react";

interface HeroAnimationProps {
  animation: any;
}

const HeroAnimationData: FC<HeroAnimationProps> = ({ animation }) => {
  return (
    <div className="w-full h-full">
      <Lottie
        animationData={animation}
        loop={true}
        initialSegment={[0, 100]} // Increased range for smoother animation
        style={{ width: "100%", height: "100%" }}
        rendererSettings={{
          preserveAspectRatio: "xMidYMid slice",
        }}
        interactivity={{
          mode: "play",
          speed: 0.3, // Slows down the animation
        }}
      />
    </div>
  );
};

export default HeroAnimationData;

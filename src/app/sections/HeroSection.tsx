import Image from "next/image";
import HeroImage from "@/public/images/home/hero.png";

const HeroSection = () => {
  return (
    <div>
      <Image className="w-screen" src={HeroImage} alt="Hero Image" />
    </div>
  );
};

export default HeroSection;

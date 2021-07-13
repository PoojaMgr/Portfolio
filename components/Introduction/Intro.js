import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import IntroSocialItems from "./IntroSocialItems";
import Image from "next/image";
import Cover from "../../assets/Cover.png";

export default function Intro() {
  return (
    <div className="flex  relative h-screen w-full p-10 overflow-hidden shadow-lg">
      <div className="self-center subpixel-antialissed z-10 mt-6 relative">
        <h6 className="font-sans md:text-2xl sm:text-xl mt-10 text-lg mb-3 text-gray-700 pointer-events-none dark:text-gray-300 opacity-80">
          {"Hey there, I'm "}
        </h6>
        <h1 className="dark:font-Codystar font-LightName md:text-6xl sm:text-6xl text-5xl pointer-events-none text-black-900 dark:neonPink font-black dark:glowEffectName">
          {"Pooja Thapa"}
        </h1>
        <p className="font-sans md:text-xl sm:text-lg text-md mt-3 text-gray-700 pointer-events-none dark:text-gray-300 opacity-80">
          {"a developer, a student & food lover"}
        </p>
        <div className="flex space-x-10 mb-10 mt-5">
        <IntroSocialItems Icons={faGithub} Path="https://github.com/PoojaMgr"  Color="text-gray-900" Size="fa-lg"/>
        <IntroSocialItems Icons={faLinkedin} Path="" Color="text-blue-600" />
        <IntroSocialItems Icons={faInstagram} Path="" Color="text-pink-600"/>
        </div>
       
      </div>
      <div className="hidden lg:block mt-3 z-20 absolute space-x-40 space-y-28">

    {/* <Image src={Cover} alt="typing" className=" rounded-md inline-flex opacity-100"/> */}
      </div>
    </div>
  );
}

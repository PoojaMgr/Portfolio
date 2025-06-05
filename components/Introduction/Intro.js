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
    <div
      className="flex  relative h-screen w-full p-10 overflow-hidden justify-center shadow-lg"
      id="intro"
    >
      <div className="self-center z-10 mt-6 relative">
        <h6 className="font-sans md:text-2xl sm:text-xl mt-10 text-lg mb-3 text-gray-700 pointer-events-none dark:text-gray-300 opacity-80">
          Hey there, I&#39;m
        </h6>
        <h1 className="dark:font-Codystar font-LightName md:text-6xl sm:text-6xl text-5xl pointer-events-none text-black-900 font-black">
          Pooja Thapa
        </h1>
        <p className="font-sans md:text-xl sm:text-lg text-md mt-3 text-gray-700 dark:text-gray-300 opacity-80">
          Frontend Developer &#64;{" "}
          <a
            href="https://infotechtion.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            Infotechtion
          </a>
        </p>
        <div className="flex space-x-5 mb-10 mt-5">
          <IntroSocialItems
            Icons={faGithub}
            Path="https://github.com/PoojaMgr"
            Color="text-gray-900"
            Size="fa-2xl"
          />
          <IntroSocialItems
            Icons={faLinkedin}
            Path="https://www.linkedin.com/in/pooja-thapa-815359b1/"
            Color="text-blue-600"
            Size="fa-2xl"
          />
          <IntroSocialItems
            Icons={faInstagram}
            Path=""
            Color="text-pink-600"
            Size="fa-2xl"
          />
        </div>
      </div>
    </div>
  );
}

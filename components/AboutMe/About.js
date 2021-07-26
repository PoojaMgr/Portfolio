import Image from "next/image";
import WorkingWomen from "../../assets/Progress-overview.gif";

export default function About() {
  return (
    <div className="flex flex-row w-full relative dark:Dark1 pt-20 lg:pt-28 justify-center">
      <div className="p-10 pt-8 flex flex-col-reverse md:flex-row sm:pr-20 lg:pl-52 lg:items-center">
        <Image src={WorkingWomen} alt="working" loading="lazy"/>

        <div className="flex flex-col z-20 flexAdj mb-10 w-full lg:w-2/3 sm:ml-6 lg:ml-5 lg:pr-10 lg:h-full aos-init aos-animate">
          <h1 className="text-left pb-5 text-blue-900 text-5xl font-LightName dark:text-gray-200 font-black">
            About Me
          </h1>
          <p className="text-left text-gray-500 font-lg font-LightName sm:text-lg md:text-xl mb-5">
          {" I'm a software engineer who is passionate about working in"} <br/>{"new technologies."} <br/><br/> {"Friendly by nature and always keen to explore."}
          </p>
          <p className="text-left text-gray-500 font-lg font-LightName sm:text-lg md:text-xl mb-5">
            Cooking, shopping and dancing are some of my other hobbies.
          </p>
        </div>
      </div>
    </div>
  );
}

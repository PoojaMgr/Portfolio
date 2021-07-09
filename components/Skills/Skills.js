import Graphql from "../../assets/skills/graphql.svg";
import Apollo from "../../assets/skills/apollo-graphql-compact.svg";
import Angular from "../../assets/skills/angular-icon-1.svg";
import React from "../../assets/skills/react-2.svg";
import Electron from "../../assets/skills/electron-1.svg";
import Mongo from "../../assets/skills/mongodb-icon-1.svg";
import HTML from "../../assets/skills/html5-2.svg";
import TechnicalSkills from "./TechnicalSkills";
import JavaScript from "../../assets/skills/logo-javascript.svg";
import Nodejs from "../../assets/skills/nodejs-icon.svg";
import TailWind from "../../assets/skills/tailwind-css-2.svg";
import NextJS from "../../assets/skills/next-js.svg";

export default function Skills() {
  return (
      <>
      <div className=" bg-gradient-to-r from-transparent to-pink-100 dark:skillsDarkGradient min-w-full absolute mt-24 sm:mt-36 h-full z-1 transform skew-y-12"></div>
    <div className="p-10 relative lg:-mt-4 flex flex-col lg:flex-row sm:pr-20 lg:p-10 lg:items-center">
      <div className="flex flex-col z-20 flexAdj mb-10 w-full lg:w-1/2 sm:ml-6 lg:ml-10 aos-init aos-animate">
        <p className="text-left pb-5 text-blue-900 text-5xl font-LightName dark:text-gray-200 font-black">
          SKILLS
        </p>
        <div className="flex flex-col border-none rounded-md w-full shadow-md border dark:border-gray-800 dark:shadow-2xl mt-10 p-5">
          <div className="flex sm: h-60">
            <div className="flex space-x-4 h-20 w-full flex-wrap justify-start">
            <TechnicalSkills logo={HTML} name="HTML"/>
            <TechnicalSkills logo={JavaScript} name="Javascript"/>
            <TechnicalSkills logo={React} name="ReactJS"/>
            <TechnicalSkills logo={Graphql} name ="Graphql"/>
            <TechnicalSkills logo={Apollo} name ="Apollo"/>
            <TechnicalSkills logo={TailWind} name="Tailwind"/>
            <TechnicalSkills logo={Electron} name="Electron"/>
            <TechnicalSkills logo={Angular} name="AngularJS"/>
            <TechnicalSkills logo={Mongo} name="MongoDB"/>
            <TechnicalSkills logo={Nodejs} name="NodeJS"/>
            <TechnicalSkills logo={NextJS} name="NextJS"/>            
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
    </>
  );
}

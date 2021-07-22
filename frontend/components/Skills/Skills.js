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
import Content from "./Content";

export default function Skills() {
  return (
    <div className="flex flex-col pb-10 relative" id="skills">
      <div className=" bg-gradient-to-r from-transparent to-pink-100 min-w-full absolute mt-24 sm:mt-36 h-full z-1 transform skew-y-12"></div>
      <div className="p-10 lg:-mt-4 flex flex-col lg:flex-row sm:pr-20 lg:p-10 lg:items-center">
        <div className="flex flex-col z-20 flexAdj mb-10 w-full lg:w-1/2 sm:ml-6 lg:ml-10">
          <p className="text-left pb-5 text-blue-900 text-5xl font-medium dark:text-gray-200">
            SKILLS
          </p>
          <div className="flex flex-col border-none rounded-md w-full shadow-md border dark:border-gray-800 mt-10">
            <div className="flex sm: h-60">
              <div className="flex lg:space-x-4 h-20 w-full flex-wrap justify-start">
                <TechnicalSkills logo={HTML} name="HTML" />
                <TechnicalSkills logo={JavaScript} name="Javascript" />
                <TechnicalSkills logo={React} name="ReactJS" />
                <TechnicalSkills logo={Graphql} name="Graphql" />
                <TechnicalSkills logo={Apollo} name="Apollo" />
                <TechnicalSkills logo={TailWind} name="Tailwind" />
                <TechnicalSkills logo={Electron} name="Electron" />
                <TechnicalSkills logo={Angular} name="AngularJS" />
                <TechnicalSkills logo={Mongo} name="MongoDB" />
                <TechnicalSkills logo={Nodejs} name="NodeJS" />
                <TechnicalSkills logo={NextJS} name="NextJS" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col z-20 w-full lg:w-1/2 sm:ml-6 lg:ml-10 abolute">
          <div className="flex justify-center items-center flex-col sm:p-5 lg:p-0">
            <div className="flex flex-col p-12 w-full md:w-3/4 lg:w-11/12 h-full bg-gray-50 shadow-1xl rounded-lg">
              <p className="text-center pb-5 text-blue-900 text-5xl font-medium dark:text-gray-200">
                Works
              </p>
              <div className="flex flex-col justify-start items-start text-sm">
                <ul className="list-outside list-disc">
                  {Content.map((content) => {
                    return <li key="index" className="py-2 font-normal from-black">{content.text}</li>
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

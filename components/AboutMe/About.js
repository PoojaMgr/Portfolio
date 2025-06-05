import Image from "next/image";
import WorkingWomen from "../../assets/Progress-overview.gif";

export default function About() {
  return (
    <section
      id="profile"
      className="relative flex justify-center w-full pt-20 lg:pt-28 min-h-screen shadow-lg dark:bg-Dark1"
    >
      <div className="flex flex-col-reverse md:flex-row items-center px-6 lg:px-20 py-10 gap-10 max-w-6xl">
        {/* Image Section */}
        <div className="flex-shrink-0">
          <Image src={WorkingWomen} alt="working" loading="lazy" />
        </div>

        {/* Text Section */}
        <div className="flex flex-col z-20 w-full lg:w-2/3">
          <h2 className="text-blue-900 text-5xl font-medium pb-5 dark:text-gray-200">
            About Me
          </h2>

          <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed">
            I’m a frontend engineer with 8+ years of experience building fast,
            scalable web apps using React, Next.js, and JavaScript/TypeScript.
            <br />
            <br />
            I’ve worked across domains like travel, marine, and marketing—most
            recently at Infotechtion—focusing on performance, micro-frontend
            architecture, and Azure-based development.
            <br />
            <br />
            I’m passionate about crafting meaningful user experiences, mentoring
            others, and continuously learning—currently exploring AI and
            advanced frontend architecture. 🌱 💻
          </p>
        </div>
      </div>
    </section>
  );
}

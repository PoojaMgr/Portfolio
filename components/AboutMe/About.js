import Image from "next/image";
import WorkingWomen from "../../assets/Progress-overview.gif";

export default function About() {
  return (
    <section
      id="profile"
      className="relative flex justify-center w-full lg:pt-28 min-h-screen shadow-lg dark:bg-Dark1"
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
            I’m a frontend engineer with 8+ years of experience crafting fast,
            scalable web applications using React, Next.js, and TypeScript.
            <br />
            <br />
            I’ve worked across diverse industries like travel, marine, and
            marketing. Most recently, at Infotechtion, I focused on improving
            performance, building micro-frontend architectures, and working with
            Azure cloud technologies.
            <br />
            <br />
            I’m passionate about creating smooth, meaningful user experiences
            and enjoy mentoring others to grow their skills. <br /> <br />
            I’m always eager to learn and grow — still revising, improving, and
            exploring new technologies like AI and advanced frontend patterns to
            keep pushing the boundaries of what’s possible. 🌱💻
          </p>
        </div>
      </div>
    </section>
  );
}

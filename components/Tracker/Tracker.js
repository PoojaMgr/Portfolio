import { motion } from "framer-motion";

const journey = [
  {
    year: "2016",
    title: "Graduated B.Tech",
    description: "Specialized in Computer Science",
    skills: ["Java", "OOP"],
  },
  {
    year: "2016",
    title: "First Job at SDG Corporation",
    description: "Software Trainee: Campus Placement",
    skills: ["JQuery", "JavaScript", "AngularJS 1.x", "HTML", "CSS"],
  },
  {
    year: "2019",
    title: "Lead Engineer",
    description:
      "Joined Successive Technologies, worked for the client - Dentsu Aegis",
    skills: [
      "ReactJS",
      "JavaScript",
      "TypeScript",
      "Apollo GraphQL",
      "NodeJS",
      "ExpressJS",
      "MongoDB",
    ],
  },
  {
    year: "2021",
    title: "Senior Software Engineer",
    description:
      "Joined LTIMindtree, worked for the client - American Bureau of Shipping & American Express GBT",
    skills: [
      "ReactJS",
      "NextJS",
      "JavaScript",
      "TypeScript/JavaScript",
      "Redux",
      "Cordova",
    ],
  },
  {
    year: "2025",
    title: "Senior Frontend Role",
    description: "Joined Infotechtion, working on product ARM development",
    skills: ["ReactJS", "JavaScript", "TypeScript/JavaScript", "Redux"],
  },
];

export default function CareerTracker() {
  return (
    <div className="shadow-lg" id="journey">
      <div className="relative max-w-3xl mx-auto py-10 px-4 min-h-screen">
        <p className="text-center pb-5 text-blue-900 text-5xl font-medium dark:text-gray-200">
          My Journey
        </p>
        <div className="absolute left-1/2 transform -translate-x-1/2 h-11/12 w-1 bg-gray-300" />

        {/* Journey steps */}
        <div className="space-y-12">
          {journey.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, type: "spring" }}
                className={`relative flex ${
                  isLeft ? "justify-start" : "justify-end"
                } w-full`}
              >
                {/* Content block */}
                <div className="w-1/2 px-4">
                  <div className="bg-white shadow-xl rounded-xl p-5 border border-gray-200">
                    <div className="text-sm text-blue-600 font-semibold">
                      {item.year}
                    </div>
                    <div className="text-lg font-bold mt-1">{item.title}</div>
                    <div className="text-sm text-gray-600 mt-2">
                      {item.description}
                    </div>

                    {/* Skills earned badges */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.skills.map((skill, i) => (
                        <motion.span
                          key={i}
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{
                            delay: i * 0.05,
                            type: "spring",
                            stiffness: 200,
                          }}
                          className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full font-medium shadow-sm"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Center dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 bg-blue-600 w-4 h-4 rounded-full border-4 border-white z-10 top-1/2 -translate-y-1/2" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

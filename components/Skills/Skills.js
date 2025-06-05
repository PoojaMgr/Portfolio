import TechnicalSkills from "./TechnicalSkills";

const skillsData = [
  "HTML5",
  "JavaScript",
  "React.js",
  "ContextAPI",
  "CSS",
  "CI/CD",
  "GraphQL",
  "Redux",
  "Vite",
  "Okta",
  "TypeScript",
  "AI",
  "Web Performance",
  "Docker",
  "Cordova",
  "Apollo",
  "Material UI",
  "Electron.js",
  "MongoDB",
  "Node.js",
  "Next.js",
  "Azure",
  "Agile Development",
  "Git",
  "Team Collaboration",
  "Product Ownership",
  "Micro Frontend",
  "Tailwind CSS",
  "React Testing Library",
  "Jenkins",
  "Chart.js",
  "Problem Solving",
  "Strong Communication & Leadership",
  "Postman",
  "AWS",
  "Co-Pilot",
];

// Predefined “random-like” offsets
// const offsetClasses = [
//   "translate-x-2 translate-y-1",
//   "-translate-x-3 translate-y-2",
//   "translate-x-4 -translate-y-1",
//   "-translate-x-2 -translate-y-2",
//   "translate-y-3",
//   "-translate-y-3",
//   "translate-x-3",
//   "-translate-x-4",
//   "translate-x-1 -translate-y-2",
//   "-translate-x-1 translate-y-2",
// ];

const offsetClasses = [
  "rotate-2",
  "-rotate-3",
  "rotate-1 scale-95",
  "-rotate-1 scale-105",
  "rotate-3 scale-90",
];

export default function Skills() {
  return (
    <div
      id="skills"
      className="min-h-5/6 flex justify-center pt-40 shadow-lg pb-40"
    >
      <div className="relative w-full max-w-6xl">
        <p className="text-center pb-10 text-blue-900 text-5xl font-medium dark:text-gray-200">
          Skills
        </p>
        <div className="relative flex flex-wrap gap-10 justify-center items-center">
          {skillsData.map((skill, i) => (
            <TechnicalSkills
              key={skill}
              name={skill}
              extraClass={offsetClasses[i % offsetClasses.length]}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

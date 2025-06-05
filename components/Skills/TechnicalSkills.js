export default function TechnicalSkills({ name, extraClass = "" }) {
  return (
    <span
      className={`px-4 py-4 text-sm rounded-full bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100 font-medium shadow-md transform transition-all hover:scale-105 hover:rotate-1 ${extraClass}`}
    >
      {name}
    </span>
  );
}

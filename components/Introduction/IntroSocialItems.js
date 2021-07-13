import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function IntroSocialItems({ Icons, Path, Color }) {
  return (
    <a href={Path} target="_blank" rel="noreferrer" className={`h-14 w-14 items-center `+ Color + ` justify-center bg-yellow-500z-20 dark:z-20 bg-gray-100 transform hover:scale-110 rounded-full border border-blue-800 px-2 py-1 shadow-lg dark:bg-transparent dark:rounded-none dark:px-0 dark:py-0 dark:border-none dark:glowEffect dark:animate-pulse dark:startEffect2`}>
      <FontAwesomeIcon icon={Icons}/>
    </a>
  );
}

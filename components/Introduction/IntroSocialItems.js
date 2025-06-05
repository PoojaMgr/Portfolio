import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function IntroSocialItems({ Icons, Path, Color, Size }) {
  return (
    <a
      href={Path}
      target="_blank"
      rel="noreferrer"
      className={
        Color +
        ` justify-center transform hover:scale-110 px-2 py-1 dark:glowEffect dark:animate-pulse dark:startEffect2`
      }
    >
      <FontAwesomeIcon icon={Icons} className={Size} />
    </a>
  );
}

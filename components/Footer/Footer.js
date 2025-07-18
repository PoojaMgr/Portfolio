import {
  faCode,
  faDownload,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Footer() {
  return (
    <div
      className="w-full flex flex-col space-y-5 sm:space-y-0 sm:flex-row justify-between items-center px-20 py-5 bg-black"
      id="contact"
    >
      <div className="text-white">
        <h1 className="flex justify-center sm:justify-start items-center space-x-1">
          <FontAwesomeIcon icon={faCode} height={20} width={20} />{" "}
          <span> by Pooja Thapa</span>
        </h1>
    </div>
        </div>
  );
}

import Image from "next/image";
import { Link } from "react-scroll";
import Face from "../../assets/face.png";
import HeaderItem from "./HeaderItem";
import {
  FlagIcon,
  LightBulbIcon,
  InboxIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

function Header() {
  return (
    <header className="flex w-full items-center justify-between bg-black">
      <Image
        className="object-contain rounded-full"
        src={Face}
        alt="profilePic"
      />
      <div className="flex flex-grow justify-end flex-col sm:flex-row items-end sm:items-center">
        <Link to="profile" smooth duration={1000}>
          <HeaderItem title="Profile" Icon={UserIcon} />
        </Link>

        <Link to="journey" smooth spy={true} duration={1000}>
          <HeaderItem title="Journey" Icon={FlagIcon} />
        </Link>

        <Link to="skills" smooth duration={1000}>
          <HeaderItem title="Skills" Icon={LightBulbIcon} />
        </Link>

        <Link to="contact" smooth duration={1000}>
          <HeaderItem title="Contact" Icon={InboxIcon} />
        </Link>
      </div>
    </header>
  );
}

export default Header;

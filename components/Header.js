import Image from "next/image";
import Face from "../assets/face.png";
import HeaderItem from "./HeaderItem";
import { AcademicCapIcon, LightBulbIcon, CodeIcon, InboxIcon } from '@heroicons/react/outline';

function Header() {
    return (
        <header className="flex sm:flex-row m-5 justify-between items-center h-auto">
        <Image  className="object-contain rounded-full" src={Face} alt="profilePic"/>
            <div className="flex flex-grow justify-evenly max-w-2xl">
                <HeaderItem title="Education" Icon={AcademicCapIcon}/>
                <HeaderItem title="Skills" Icon={LightBulbIcon}/>
                <HeaderItem title="Projects" Icon={CodeIcon}/>
                <HeaderItem title="Contact" Icon={InboxIcon}/>
            </div>
        </header>
    )
}

export default Header;
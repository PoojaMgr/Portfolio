import Image from "next/image";
import { Link } from "react-scroll";
import Face from "../../assets/face.png";
import HeaderItem from "./HeaderItem";
import { AcademicCapIcon, LightBulbIcon, CodeIcon, InboxIcon } from '@heroicons/react/outline';

function Header() {
    return (
        <header className="flex absolute w-full items-center justify-between p-4 pr-5 z-10">
         <Image  className="object-contain rounded-full" src={Face} alt="profilePic"/>
            <div className="flex flex-grow justify-evenly max-w-2xl">
                <Link to="education" smooth spy={true} activeClass={{backgroundColor: "black"}} duration={1000} ><HeaderItem title="Education" Icon={AcademicCapIcon}/></Link>                
                <Link to="skills" smooth duration={1000}><HeaderItem title="Skills" Icon={LightBulbIcon}/></Link>
                <Link to="projects" smooth duration={1000}><HeaderItem title="Projects" Icon={CodeIcon}/></Link>
                <Link to="contact" smooth duration={1000}><HeaderItem title="Contact" Icon={InboxIcon}/></Link>
            </div>
        </header>
    )
}

export default Header;
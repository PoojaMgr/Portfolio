import Image from "next/image";
import dynamic from "next/dynamic.js";

const SchoolReport = dynamic(() => import("./Charts/SchoolReport"), { ssr: false });
const GraduateReport = dynamic(() => import("./Charts/GraduateReport"), { ssr: false });

export default function Cards({detail, name, subject, logo}) {
    return (
        <figure className="bg-pink-200 rounded-xl p-8 md:m-6 lg:m-8 w-full mb-10 ml-0 mr-0 sm:w-2/3 sm:mb-6 md:w-2/3 lg:w-1/3 m-2 shadow-xl dark:bg-gray-800 dark:shadow-2xl { box-shadow: inset 0px -6px 34px hsl(0 0% 100% / 0.3), 38px 90% 0.5) !important; border-radius: 10px; margin-top: 80px } aos-init aos-animate">
           <div className="w-36 h-36 mx-auto dark:bg-gray-300 dark:p-1">
            <Image src={logo} alt="logo"/>
            </div> 
            <div className="pt-6 space-y-4">
                <h1 className="text-lg font-semibold text-center text-blue-900 dark:text-gray-200">{name}</h1>
                <blockquote>
                    <p className="text-sm text-center text-gray-600 dark:text-gray-400 font-semibold">
                   {detail}
                   </p>
                </blockquote>
                <div className=" border-1 w-full mt-10 m-auto h-12">
                    {name === 'Holy Cross High School' ? <SchoolReport/>: <GraduateReport/>}
                </div>
                <figcaption className="font-medium pt-40">
                    <div className="text-gray-500">{subject}</div>
                </figcaption>
            </div>
        </figure>
    )
}

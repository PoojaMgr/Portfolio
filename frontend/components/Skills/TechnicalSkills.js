import Image from "next/image";


export default function TechnicalSkills({ logo, name}) {
    return (
        <div className={`rounded-full p-2 shadow-md mt-2 bg-pink-50 opacity-100 has-tooltip`}>
            <span className='tooltip rounded shadow-lg p-1 bg-gray-100 text-gray-900 mt-8'>
                {name}
        </span>
        <Image src={logo} height="50px" width="50px" alt="graphql" />
      </div>
    )
}

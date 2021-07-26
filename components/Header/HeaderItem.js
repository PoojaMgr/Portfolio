export default function HeaderItem({ title, Icon}) {
    return (
        <div className="flex flex-col items-center cursor-pointer group w-3 sm:w-20 hover:text-black space-x-6 md:space-x-8">
            <Icon className="h-6 mb-1 group-hover:animate-bounce"/>
            <h2 className="opacity-0 sm:opacity-100 tracking-widest text-sm pr-5">{ title }</h2>
        </div>
    )
}

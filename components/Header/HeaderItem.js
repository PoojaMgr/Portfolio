export default function HeaderItem({ title, Icon }) {
  return (
    <div className="flex flex-col items-center cursor-pointer group w-3 sm:w-20 hover:text-black space-x-6 md:space-x-8">
      <Icon className="h-4 mb-1 group-hover:animate-bounce text-white" />
      <h2 className="opacity-0 sm:opacity-100 tracking-widest text-sm pr-6 text-white">
        {title}
      </h2>
    </div>
  );
}

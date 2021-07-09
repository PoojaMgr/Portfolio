export default function SchoolReport() {
  return (
    <div>
      <label className="dark:text-gray-100 text-blue-900 font-semibold mb-2">
        High School
      </label>

      <div className=" flex align-middle pb-3">
        <div className="h-5 bg-blue-800 rounded-md  w-screen">
          <div className="h-5 w-8 bg-blue-800 translate-x-6 flex align-middle justify-center rounded-md"></div>
        </div>
        <span className="pl-5 font-bold flex-initial">72%</span>
      </div>

      <label className="dark:text-gray-100 text-blue-900 font-semibold mb-2">
       Senior secondary
      </label>

      <div className=" flex align-middle">
        <div className="h-5 bg-blue-800 rounded-md w-2/4">
          <div className="h-5 w-6 bg-blue-800 translate-x-6 flex align-middle justify-center rounded-md"></div>
        </div>
        <span className="pl-5 font-bold flex-initial">60%</span>
      </div>
    </div>
  );
}

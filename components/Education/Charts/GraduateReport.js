export default function GraduateReport() {
 const repeatBar = [
    {
      year: 1,
      marks: "73%",
      height: 24,
    },
    {
      year: 2,
      marks: "63%",
      height: 16,
    },
    {
      year: 3,
      marks: "69%",
      height: 20,
    },
    {
      year: 4,
      marks: "74%",
      height: 28,
    },
  ];
  return (
    <>
      <div className="flex flex-col">
        <div className="flex justify-evenly border-b-2 border-blue-900 dark:border-gray-100 items-end">
          {repeatBar.map((report) => {
            return (
              <div className="flex flex-col items-center" key={report.year}>
                <p className="flex flex-col items-center">{report.year}</p>
                <div className={`flex justify-center items-center h-${report.height} w-8 rounded-tl-md rounded-tr-md bg-blue-800 dark:darkBar`}>
                  <p className="transform -rotate-90 text-center text-gray-200 px-3">
                    {report.marks}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <p className="self-center pt-3 font-semibold text-gray-500">- Yearly Graph -</p>
      </div>
    </>
  );
}

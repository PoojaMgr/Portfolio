export default function GraduateReport() {
  const repeatBar = [
    {
      semester: 1,
      marks: "69.1%",
      height: 69,
    },
    {
      semester: 2,
      marks: "76%",
      height: 76,
    },
    {
      semester: 3,
      marks: "67.1%",
      height: 67,
    },
    {
      semester: 4,
      marks: "60%",
      height: 60,
    },
    {
      semester: 5,
      marks: "67.3%",
      height: 67,
    },
    {
      semester: 6,
      marks: "70%",
      height: 70,
    },
    {
      semester: 7,
      marks: "70%",
      height: 70,
    },
    {
      semester: 8,
      marks: "78%",
      height: 78,
    },
  ];
  return (
    <>
      <div className="flex flex-col">
        <div className="flex justify-between border-b-2 border-blue-900 dark:border-gray-100 items-end">
          {repeatBar.map((report) => {
            const { year, marks, height } = report;
            return (
              <div className="flex flex-col items-center" key={year}>
                <p className="flex flex-col items-center">{year}</p>
                <div className={`flex justify-center items-center w-6 rounded-tl-md rounded-tr-md bg-blue-800 dark:darkBar`} style={{height: report.height}}>
                  <p className="transform -rotate-90 text-center text-gray-200 px-3">
                    {marks}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <p className="self-center pt-3 font-semibold text-gray-500">- Semester Wise Graph -</p>
      </div>
    </>
  );
}

import Cards from "./Cards";
import University from "../../assets/university.png";
import School from "../../assets/school.png";
export default function Education() {
  return (
    <div className="p-5 dark:Dark1 ">
      <h1 className="text-center pb-5 text-blue-900 text-5xl font-LightName dark:text-gray-200 font-bold">
        {" "}
        Education
      </h1>
      <div className="flex pl-20 justify-center py-10 px-6 flex-col md:flex-row sm:items-center lg:px-10 mb-10">
        <Cards detail=" Holy Cross High School is the private, catholic school located in Nautanwa, UP, India" name="Holy Cross High School" subject={`Physics, Chemistry, Math & Computer Science`} logo={School}/>
        <Cards detail="UPTU is a public collegiate university in Lucknow in the Indian state of Uttar Pradesh." name="Uttar Pradesh Technical University" subject="BTech. Software Engineering (IT)" logo={University}/>
      </div>
    </div>
  );
}

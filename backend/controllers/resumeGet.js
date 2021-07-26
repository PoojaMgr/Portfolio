const resume = require("../models/resume");
const GetResumeSchema = require("../models/resume");

const getResume = (req, res) => {
    try{
       const findResume = await resume.find();
       res.json("File downloaded successfully")
    } catch(error){
        res.json({message: "Error while fetching"})
    }
}
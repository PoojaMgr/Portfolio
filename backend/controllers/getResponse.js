const FeedbackSchema = require("../models/postFeedback");

const getResponse = async (req, res) => {
  try {
    const postFeedback = await FeedbackSchema.find();
    res.status(200).json(postFeedback);    
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = getResponse;

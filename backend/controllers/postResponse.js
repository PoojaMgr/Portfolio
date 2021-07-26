const PostFeedBackSchema = require("../models/postFeedback");

const postResponse = async (req, res) => {

  const postFeedback = new PostFeedBackSchema({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    message: req.body.message,
  });

  try {
    await postFeedback.save();
    res.json(postFeedback);    
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = postResponse;

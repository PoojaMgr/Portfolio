const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");
const app = express();
const postFeedback = require("./routes/postResponse");
const getFeedback = require("./routes/getResponse");
var cors = require("cors");

//middleware
app.use(bodyParser.json());
app.use(cors());
app.use(postFeedback);
app.use(getFeedback);

app.get("/", (req, res) => {
  res.send("Hello to my portfolio API");
});
//connect to DB

const PORT = process.env.PORT || 4000;

mongoose
  .connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));

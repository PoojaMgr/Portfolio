const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require('dotenv/config');
const app = express();
const postRoutes = require('./routes/postResponse');
var cors = require('cors')

//middleware
app.use(cors());
app.use(bodyParser.json());
app.use(postRoutes);

app.get("/", (req, res) => {
  console.log("Hey");
  res.send("Hey I am in browser");
});

//connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to DB!!");
  }
);

app.listen(4000);

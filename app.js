const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const routes = require("./src/routes/router");
const { MONGO_CONNECTION } = require("./src/constant");
const app = express();

mongoose.connect(MONGO_CONNECTION, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/", routes);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Service running on http;//localhost:${process.env.PORT || 3000}.`);
});

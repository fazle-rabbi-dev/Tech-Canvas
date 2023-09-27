const mongoose = require("mongoose");
require("dotenv").config();
const URI = `${process.env.MONGO_URI}/tech-canvas`;

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(URI, connectionParams)
  .then(() => {
    console.log("\n");
    console.log("[*] Connected to mongodb!");
    console.log("\n");
  })
  .catch((err) => {
    console.error(`[*] Something went wrong ! Cause:${err.message}`);
    console.log(err);
  });

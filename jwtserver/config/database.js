const mongoose = require("mongoose");

const { MONGO_URI } = process.env;

exports.connect = () => {
  // Connecting to the database
  mongoose
    .set('strictQuery', false)
    .connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    //   useCreateIndex: true,
    //   useFindAndModify: false,
    })
    .then(() => {
      console.log("Connected to the database");
    })
    .catch((error) => {
      console.log("Database connection failed.");
      console.error(error);
      process.exit();
    });
};
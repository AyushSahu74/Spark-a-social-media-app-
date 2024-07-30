import mongoose, { mongo } from "mongoose";

const DBConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("DB Connection established");
    })
    .catch((error) => {
      console.log(error);
    });
};

export default DBConnection;

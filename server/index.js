import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import DBConnection from "./config/database.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js";
import tweetRoute from "./routes/tweetRoute.js";

dotenv.config();
DBConnection();
const app = express();

//middlewares
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());
app.use(cookieParser());
const corsoptions = {
  origin: "http://localhost:5173",
  credentials: true,
};
app.use(cors(corsoptions));

//api

app.use("/api/v1/user", userRoute);
app.use("/api/v1/tweet", tweetRoute);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});

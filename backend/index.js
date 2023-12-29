import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
// import { Book } from "./models/bookMoel.js";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";

const app = express();

//middelware for parsing request body
app.use(express.json());

//Middelware for handling CORS POLICY
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "PUT", "POST", "DELETE"], // enabled Reuqest Methods
    allowedHeaders: ["Content-Type"]
  })
);

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("welcome to mern stack tutorial");
});

app.use("/books", booksRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server running on Port :${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

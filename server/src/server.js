// import "dotenv/config";
// import mongoose from "mongoose";
// import cors from "cors";
import express from "express";
import todolistRoutes from "./routes/todolistRoutes.js";

const app = express();
// const PORT = process.env.PORT || 5000;
// const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/Todolist-mern-db";

// app.use(cors());
// app.use(express.json());

//connect to MongoDB
// mongoose.connect(MONGO_URI)
//     .then(() => {console.log("connected to db")})
//     .catch((err) => {console.log(err)});

app.use("/api/todolist", todolistRoutes);

app.listen(5001, () => {
    console.log("server started on port 5001");
});
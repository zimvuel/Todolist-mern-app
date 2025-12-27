import dotenv from "dotenv";
// import mongoose from "mongoose";
// import cors from "cors";
import express from "express";
import todolistRoutes from "./routes/todolistRoutes.js";
import connectDB from "./config/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();
// app.use(cors());
// app.use(express.json());

app.use("/api/todolist", todolistRoutes);

app.listen(PORT, () => {
    console.log("server started on port 5001");
});
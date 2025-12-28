import dotenv from "dotenv";
// import cors from "cors";
import express from "express";
import todolistRoutes from "./routes/todolistRoutes.js";
import connectDB from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// app.use(cors());
app.use(express.json());
app.use(rateLimiter);
app.use("/api/todolist", todolistRoutes);

connectDB() 
    .then(() => {
    app.listen(PORT, () => {
        console.log("server started on port 5001");
    });
});
import dotenv from "dotenv";
import cors from "cors";
import express from "express";
import todolistRoutes from "./routes/todolistRoutes.js";
import connectDB from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/authRoutes.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, "../../.env") });

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());
app.use(rateLimiter);
app.use("/api/todolist", todolistRoutes);
app.use("/api/auth", authRoutes);

connectDB() 
    .then(() => {
    app.listen(PORT, () => {
        console.log("server started on port 5001");
    });
});
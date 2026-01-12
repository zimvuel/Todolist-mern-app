import express from "express";
import { createTodolist, deleteTodolist, getTodolist, updateTodolist, getTodoById } from "../controllers/todolistController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.use(verifyToken);

router.get("/", getTodolist);
router.get("/:id", getTodoById);
router.post("/", createTodolist);
router.put("/:id", updateTodolist);
router.delete("/:id", deleteTodolist);

export default router;
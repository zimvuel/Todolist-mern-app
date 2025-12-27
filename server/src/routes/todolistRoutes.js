import express from "express";
import { createTodolist, deleteTodolist, getTodolist, updateTodolist } from "../controllers/todolistController.js";

const router = express.Router();

router.get("/", getTodolist);
router.post("/", createTodolist);
router.put("/:id", updateTodolist);
router.delete("/:id", deleteTodolist);

export default router;
import Todo from "../models/Todo.js";

export const getTodolist = async (_, res) => {
    try{
        const getTodolist = await Todo.find().sort({createdAt: -1});
        res.status(200).json(getTodolist);
    }
    catch (error) {
        console.log("error in getTodolist controller", error);
        res.status(500).json({message: "internal server error"});
    }
};

export const getTodoById = async (req, res) => {
    try{
        const getTodo = await Todo.findById(req.params.id);

        if(!getTodo){
            res.status(404).json({message: "Todo Not Found"})
        }

        res.status(200).json(getTodo);
    }
    catch (error) {
        console.log("error in getTodoById controller", error);
        res.status(500).json({message: "internal server error"});
    }
};

export const createTodolist = async (req, res) => {
    try{
        const {title, content} = req.body;
        const createdTodo = new Todo({title, content});
        await createdTodo.save();
        res.status(201).json(createdTodo);
    }
    catch (error) {
        console.log("error in createTodolist controller", error);
        res.status(500).json({message: "internal server error"});
    }
};

export const updateTodolist = async (req, res) => {
    try{
        const {title, content} = req.body;
        const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, {title, content}, {new: true});

        if(!updatedTodo){
            res.status(404).json({message: "Todo Not Found"});
        }

        res.status(200).json(updatedTodo);
    }
    catch (error) {
        console.log("error in updateTodolist controller", error);
        res.status(500).json({message: "internal server error"});
    }
};

export const deleteTodolist = async (req, res) => {
    try{
        const deletedTodo = await Todo.findByIdAndDelete(req.params.id);

        if(!deletedTodo){
            res.status(404).json({message: "Todo Not Found"});
        }

        res.status(200).json(deletedTodo);
    }
    catch (error) {
        console.log("error in deleteTodolist controller", error);
        res.status(500).json({message: "internal server error"});
    }
};
import Todo from "../models/Todo.js";

export const getTodolist = async (req, res) => {
    try{
        const getTodolist = await Todo.find({ user: req.userId }).sort({createdAt: -1});
        res.status(200).json(getTodolist);
    }
    catch (error) {
        console.log("error in getTodolist controller", error);
        res.status(500).json({message: "internal server error"});
    }
};

export const getTodoById = async (req, res) => {
    try{
        const getTodo = await Todo.findById({_id: req.params.id, user: req.userId});

        if(!getTodo){
            return res.status(404).json({message: "Todo Not Found"})
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
        const {title} = req.body;
        const createdTodo = await Todo.create({
            title, 
            status: false,
            user: req.userId
        });
        res.status(201).json(createdTodo);
    }
    catch (error) {
        console.log("error in createTodolist controller", error);
        res.status(500).json({message: "internal server error"});
    }
};

export const updateTodolist = async (req, res) => {
    try{
        const {title, status} = req.body;
        const updatedTodo = await Todo.findByIdAndUpdate({_id: req.params.id, user: req.userId}, {title, status}, {new: true});

        if(!updatedTodo){
            return res.status(404).json({message: "Todo Not Found"});
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
        const deletedTodo = await Todo.findByIdAndDelete({_id: req.params.id, user: req.userId});

        if(!deletedTodo){
            return res.status(404).json({message: "Todo Not Found"});
        }

        res.status(200).json(deletedTodo);
    }
    catch (error) {
        console.log("error in deleteTodolist controller", error);
        res.status(500).json({message: "internal server error"});
    }
};
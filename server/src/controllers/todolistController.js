export const getTodolist = (req, res) => {
    res.status(200).send("you got a new todolist");
};

export const createTodolist = (req, res) => {
    res.status(201).json({message: "created successfully"});
};

export const updateTodolist = (req, res) => {
    res.status(200).json({message: "updated successfully"});
};

export const deleteTodolist = (req, res) => {
    res.status(200).json({message: "deleted successfully"});
};
import mongoose from "mongoose"

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
        required: true,
    },
}, {timestamps: true});

const Todo = mongoose.model("Todo", todoSchema);

export default Todo;
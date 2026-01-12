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
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User",
        required: true,
    },
}, {timestamps: true});

const Todo = mongoose.model("Todo", todoSchema);

export default Todo;
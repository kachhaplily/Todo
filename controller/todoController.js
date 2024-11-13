// controllers/todoController.js
const Todo = require('../model/todo');

// Create a new Todo
exports.createTodo = async (req, res) => {
    const { title } = req.body;
    try {
        const newTodo = new Todo({ title });
        await newTodo.save();
        res.status(201).json(newTodo);
    } catch (err) {
        res.status(400).json({ error: 'Failed to create todo' });
    }
};

// Get all Todos
exports.getTodos = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (err) {
        res.status(500).json({ error: 'Failed to retrieve todos' });
    }
};

// Update a Todo by ID
exports.updateTodo = async (req, res) => {
    const { id } = req.params;
    const { title, completed } = req.body;
    try {
        const updatedTodo = await Todo.findByIdAndUpdate(
            id,
            { title, completed },
            { new: true }
        );
        res.json(updatedTodo);
    } catch (err) {
        res.status(400).json({ error: 'Failed to update todo' });
    }
};

// Delete a Todo by ID
exports.deleteTodo = async (req, res) => {
    const { id } = req.params;
    try {
        await Todo.findByIdAndDelete(id);
        res.json({ message: 'Todo deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete todo' });
    }
};

// Mark a Todo as complete
exports.markComplete = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedTodo = await Todo.findByIdAndUpdate(
            id,
            { completed: true },
            { new: true }
        );
        res.json(updatedTodo);
    } catch (err) {
        res.status(400).json({ error: 'Failed to mark todo as complete' });
    }
};

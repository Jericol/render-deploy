const todosServices = require("../service/todos.service");

const getAllTasks = async (req, res) => {
    try {
        const result = await todosServices.getAll();
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const getTasksById = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await todosServices.getById(id);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const createTasks = async (req, res) => {
    try {
        const newTask = req.body;
        const result = await todosServices.create(newTask);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json(error.message); 
    }
}

const updateTasks = async (req, res) => {
    try {
        const { id } = req.params;
        const field = req.body;
        const result = await todosServices.update(field, id);
        res.status(200).json(result);
    } catch (error) {
        res.status(200).json(error.message);
    }
}

const deleteTasks = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await todosServices.delete(id);
        res.json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const getTodosWithCategories = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await todosServices.getWithCategories(id);
        res.json({
            message: "enviando tareas con categorias",
            data: result,
        });
    } catch (error) {
        res.status(400).json({
            error: error.message,
            details: error.stack,
        });
    }
}


module.exports = {
    getAllTasks,
    getTasksById,
    createTasks,
    updateTasks,
    deleteTasks,
    getTodosWithCategories,
};

const { Router } = require('express');
const { 
    getAllTasks, 
    getTasksById, 
    createTasks, 
    updateTasks,
    deleteTasks,
    getTodosWithCategories,
 } = require("../controllers/todos.controller");
 const authMiddlwares = require('../middlwares/auth.middlwares');

const router = Router();

router.get("/todos", authMiddlwares, getAllTasks);

router.get("/todos/:id", authMiddlwares, getTasksById);

router.get("/todos/:id/categories", authMiddlwares, getTodosWithCategories);

router.post("/todos", authMiddlwares, createTasks);

router.put("/todos/:id", authMiddlwares, updateTasks);

router.delete("/todos/:id", authMiddlwares, deleteTasks);


module.exports = router;
const { Router  } = require('express');
const { 
    getAllUsers, 
    getUserById, 
    getUserWithTasks,
    createUsers, 
    updateUsers, deleteUsers} = require("../controllers/users.controller");

const router = Router();

router.get("/users", getAllUsers);

router.get("/users/:id", getUserById);

//traeer todas las tareas del usuario
router.get("/users/:id/todos", getUserWithTasks);

router.post("/users", createUsers);

router.put("/users/:id", updateUsers);

router.delete("/users/:id", deleteUsers);

module.exports = router;
const userServices = require("../service/users.service");

const getAllUsers = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await userServices.getAll(id);
        res.status(200).json(result);
    } catch (error) {
        res.status(200).json(error.menssage);
    }
}

const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await userServices.getById(id);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const getUserWithTasks = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await userServices.getWithTasks(id);
        res.json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const createUsers = async (req, res) => {
    try {
        const newUser = req.body;
        const result = await userServices.create(newUser);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const updateUsers = async (req, res) => {
    try {
        const { id } = req.params;
        const field = req.body;
        const result = await userServices.update(field, id);
        res.json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const deleteUsers = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await userServices.delete(id);
        res.json(result)
    } catch (error) {
        res.status(400).json(error.message);
    }
}


module.exports = {
    getAllUsers,
    getUserById,
    createUsers,
    updateUsers,
    deleteUsers,
    getUserWithTasks,

}
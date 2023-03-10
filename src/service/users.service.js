const Users = require("../models/users.models");
const Todos = require("../models/todos.models");

class userServices {
    static async  getAll() {
        try {
            const result = await Users.findAll();
            return result
        } catch (error) {
            throw error;
        }
    }

    static async getById(id) {
        try {
           const result = await Users.findByPk(id);
           return result 
        } catch (error) {
            throw error;
        }
    }

    static async getWithTasks(id) {
        try {
            const result = await Users.findOne({
                where: { id },
                attributes: [ "username", "email"],
                include: {
                    model: Todos,
                    attributes: ["title", "description"],
                    as: "task"
                },
            });
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async create(user) {
        try {
            const result = await Users.create(user);
            return result
        } catch (error) {
            throw error;
        }
    }

    static async update(field, id) {
        try {
            const result = await Users.update(field, { where: { id }})
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async delete(id) {
        try {
           const result = await Users.destroy({ where: { id } });
           return result;
        } catch (error) {
            throw error;
        }
    }
}


module.exports = userServices;

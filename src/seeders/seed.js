const db = require("../utils/database");
const Users = require("../models/users.models");
const Todos = require("../models/todos.models");
const Categories = require("../models/categories.models");
const TodosCategories = require("../models/todos-categories.models");


const users = [
    {username: "leo", email: "leo@gmail.com", password: "1234"},
    {username: "sergio", email: "sergio@gmail.com", password: "5678"},
    {username: "angie", email: "angie@gmail.com", password: "9098"},
];

const todos = [
    {title: "estudiar note", description: "hacer aseo", userId: 1},
    {title: "pasear al perro", description: "hacer tareas", userId: 1},
    {title: "lavar los platos", userId: 2},
    {title: "ir al chequeo mensual", description: "hacer caso", userId: 3},
];

const categories =  [
    {name: 'personal'},//1
    {name: 'educacion'},//2
    {name: 'salud'},//3
    {name: 'trabajo'},//4
    {name: 'Hogar'},//5
    {name: 'cocina'},//6
    {name: 'deporte'},//7
    {name: 'ocio'},//8
    {name: 'financiero'},//9
    {name: 'entretenimiento'}//10
];

const todosCategories = [
    {categoryId: 1, todoId: 1},
    {categoryId: 2, todoId: 1},
    {categoryId: 4, todoId: 1},
    {categoryId: 1, todoId: 2},
    {categoryId: 7, todoId: 2},
    {categoryId: 10, todoId: 2},
    {categoryId: 3, todoId: 2},
    {categoryId: 5, todoId: 3},
    {categoryId: 6, todoId: 3},
    {categoryId: 1, todoId: 4},
    {categoryId: 3, todoId: 4},
];


db.sync({force: true})
 .then(() =>{
    console.log('sincronizando el semillero')
    users.forEach((user) => Users.create(user));

    setTimeout(() => {
        todos.forEach((todo) => Todos.create(todo));
    }, 100);
    setTimeout(() =>{
        categories.forEach((category) => Categories.create(category));
    }, 250);
    setTimeout(() =>{
        todosCategories.forEach((tc) => TodosCategories.create(tc));
    }, 300);
 })
 .catch((error) => console.log(error))
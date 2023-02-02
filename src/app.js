const express = require('express');
const db = require("./utils/database");
const initModels = require('./models/init.models');
const usersRoutes = require("./router/users.router");
const todosRoutes = require("./router/todos.router");
const authRoutes = require("./router/auth.router");
const cors =  require('cors');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT;

db.authenticate()
    .then(() => console.log('autenticacion exitosa'))
    .catch((error) => console.log(error))

initModels();

db.sync({ force: false })
    .then(() => console.log('base de datos sincronizada'))
    .catch((error) => console.log(error))

app.use("/api/v1", usersRoutes);
app.use("/api/v1", todosRoutes);
app.use("/api/v1", authRoutes);



app.listen(PORT, () => {
    console.log(`abriendo el puerto ${PORT}`)
});
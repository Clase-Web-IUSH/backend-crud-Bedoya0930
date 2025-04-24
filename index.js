const express = require('express'); 
const { Sequelize } = require('sequelize');
const sequelize = require('./database');
const User= require ('./Models/User')
const userRoutes= require('./routes/userRoutes')
const taskRoutes= require('./routes/taskRoutes')

const app= express();

const port= process.env.PORT;

app.use(express.json()) 

app.use('/users/', userRoutes)

app.use('/tasks/', taskRoutes)


sequelize.sync()
    .then(()=>{
        console.log("Modelos sincronizados")
    })
    .catch(err => {
        console.error("Error al sincronizar datos", err)
    })

app.get('/',(req, res)=>{
    res.send('Hola desde la API')
})


app.listen(port,()=>{
    console.log("Servidor funcionando")
})


const express = require('express');
const Sequelize = require('sequelize');
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise');

const DB_USERNAME = 'app1';
const DB_PASSWORD = 'welcome123';
let conn

mysql.createConnection({
    user : DB_USERNAME,
    password : DB_PASSWORD
})
.then((connection) => {
    conn = connection
    return connection.query('CREATE DATABASE IF NOT EXISTS tw_exam')
})
.then(() => {
    return conn.end()
})
.catch((err) => {
    console.warn(err.stack)
})

const sequelize = new Sequelize('tw_exam', DB_USERNAME, DB_PASSWORD, {
    dialect: 'mysql',
    logging: false
});

class Device extends Sequelize.Model { };

Device.init({
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
    },
    price: {
        type: Sequelize.FLOAT,
    }
}, {
    sequelize,
    modelName: 'devices',
    timestamps: false
});

const app = express();
app.use(bodyParser.json());

app.get('/create', async (req, res) => {
    await sequelize.sync({force: true});
    for(let i = 0; i < 10; i++) {
        await Device.create({name: `Device-${i}`, price: `${Math.random() * 100 + i + 10}`});
    }
    res.status(201).json({message: 'devices created'});
})

app.get('/device', async (req, res) => {
    const devices = await Device.findAll();
    res.status(200).send(devices);
})

app.post('/device', async (req, res) => {
    if(!req.body || Object.keys(req.body).length === 0){
        res.status(400).json({message: 'bad request'});
    }
    else if(req.body.price<0){
        res.status(400).json({message: 'bad request'});
    }
    else if(req.body.name.length<4){
        res.status(400).json({message: 'bad request'});
    }
    else{
        const device = {
            name: req.body.name,
            price: req.body.price,
        }
        devices.push(device)
        res.status(201).json({message: "device created"})
    }
})

app.delete('/device/:id', async (req, res) => {
   if(devices.some(device => device.id === req.body.id)){
    res.status(202).json({message: "device deleted"})
   }
})

module.exports = app;
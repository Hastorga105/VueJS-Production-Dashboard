const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const config = require('../config/config')//configuracion de la base de datos
const db = {}

const sequelize = new Sequelize(
    'proyecto',
    'root',
    '12345',
    {
        host: "localhost",
        dialect: "mssql",
        port: "55998"
    }
    )

fs//tomar todos los archivos de models y usarlos para sequelize
    .readdirSync(__dirname)//regresar un arreglo de diferentes directorios
    .filter((file) =>
        file !== 'index.js'
    )
    .forEach((file) => {//importar todos los modelos
        const model = require(path.join(__dirname,file))(sequelize, Sequelize.DataTypes)
        db[model.name] = model
    })
db.images = require("./Upload.js")(sequelize, Sequelize);
db.sequelize = sequelize
db.Sequelize = Sequelize
module.exports = db
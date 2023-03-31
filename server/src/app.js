console.log('Iniciando...')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const {sequelize} = require('./models')
const config = require('./config/config')//configuraciones del servidor
global.__basedir = __dirname;
const multer = require('multer')

const upload = multer({
    dest: './uploads'
})

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())//parse peticiones .json
app.use(cors())//cors

require('./routes')(app)//archivo con las rutas de la api

//sequelize.sync({force: true})
sequelize.sync({})//sincronizar base de datos con sequelize
    .then(() => {
        app.listen(config.port)
        console.log(`Servidor iniciado en el puerto ${config.port}`)
        console.log(`Hector estuvo aqui`)
    }).catch(err => console.log(err))

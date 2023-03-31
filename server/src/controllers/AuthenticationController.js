const {User} = require('../models')//llamar al objeto User del modelo
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser (user) {//crear un jwtToken
    const ONE_WEEK = 60 * 60 * 24 * 7
    return jwt.sign(user, config.authentication.jwtSecret, {
        expiresIn: ONE_WEEK
    })
}

module.exports = {
    async register (req, res){//Hace un request mediante post
        try {
            const user = await User.create(req.body)
            res.send(user.toJSON())//mandar usuario al client, mostrar en consola
        } catch (err){
            res.send('Ya hay un usuario registrado con este email')
            token: jwtSignUser(userJson)
            // email already exists'
        }
    },
    async login (req, res) {
        try {
            const {email, password} = req.body
            const user = await User.findOne({
                where: {
                    email: email
                }
            })
            if (!user) {
                return res.status(403).send({
                    error: 'Informacion incorrecta'
                })
            }
            const isPasswordValid = await user.comparePassword(password)//llamar al metodo para comparar contraseña en el modelo
            if (!isPasswordValid) {//si no es correcta
                return res.status(403).send({
                    "error": "Informacion incorrecta"
                })
            }

            const userJson = user.toJSON()
            res.send({
                user: userJson,
                token: jwtSignUser(userJson)
            })
        } catch (err){
            res.status(500).send({
                "error": "Ha ocurrido un error"
            })
        }
    }
}
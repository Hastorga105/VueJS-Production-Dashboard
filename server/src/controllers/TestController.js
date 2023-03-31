const {Ruta} = require('../models')//llamar al objeto User del modelo

module.exports = {
    async obtRutas (req, res){
        try {
        const rutas = await Ruta.findAll({
        })
        res.send(rutas)
        } catch (err){
            res.send('Ocurrio un error')
            }
    },
    async insRutas (req, res){
        try {
        const rutas = await Ruta.create(req.body)
        res.send(rutas)
        } catch (err){
            res.send('Ocurrio un error')
            }
    }
}
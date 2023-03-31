const {Horas} = require('../models')//llamar al objeto User del modelo
const now = new Date()
const mes = now.getMonth()+1 < 10 ? "0" + now.getMonth()+1 : now.getMonth()+1
const dia = (now.getDate()+1) < 10 ? "0" + (now.getDate()+1) : (now.getDate()+1)
const fecha = now.getFullYear() + '-' + mes + '-' + dia

module.exports = {
    async obtHoras (req, res){
        try {
        const horas = await Horas.findAll({
        })
        res.send(horas)
        } catch (err){
            res.send('Ocurrio un error')
            }
    },
    async insHoras (req, res){
        try {
        const horas = await Horas.create(req.body)
        res.send(horas)
        } catch (err){
            res.send('Ocurrio un error')
            }
    },
    async obtHorasHoy (req, res){
        try {
            
            res.send(await Horas.findAll({
                where: {
                    dia: fecha
                }
            }))
            } catch (err){
                res.send('Ocurrio un error')
                }
        },
}
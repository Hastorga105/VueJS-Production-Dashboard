const {Song} = require('../models')//requerir modelo

module.exports = {//select * from listas
    async index (req, res){
        try {
           const songs = await Song.findAll({
           })
           res.send(songs)
        } catch (err){
            res.send('Ocurrio un error')
        }
    },
    async post (req, res){//crear song
        try {
           const song = await Song.create(req.body)
           res.send(song)
        } catch (err){
            res.status(500).send({
                error: 'Ocurrio un error al crear lista'
            })
        }
    },
    
}
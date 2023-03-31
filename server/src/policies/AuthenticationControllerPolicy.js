const Joi = require('joi')//verificar que el email sea una direccion de correo

module.exports = {
    register (req, res, next) {
        const schema = {
            email: Joi.string().email(),//revisa que sea string e email
            password: Joi.string()
        }
        const {error, value} = Joi.validate(req.body, schema)//Validar req body, comparar con schema
        if(error) {
            switch (error.details[0].context.key) {
                case 'email':
                    res.send({
                        error: 'Debe escribir una cuenta de correo valida'
                    })
                    break
                default:
                    res.send({
                        error: 'Datos no validos'
                    })    
            }
        } else {
            next()
        }
    }
}
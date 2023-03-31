const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))//tomar funcion que utilice callback y usar el formato promise

function hashPassword(user, options){//hashear password
    const SALT_FACTOR = 8
    if( !user.changed('password')){
        return;
    }
    return bcrypt
        .genSaltAsync(SALT_FACTOR)
        .then(salt => bcrypt.hashAsync(user.password, salt, null))
        .then(hash => {
            user.setDataValue('password', hash)//guardar hash en password
        })
}

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        password: DataTypes.STRING
        }, {
        timestamps: false,
        hooks: {//antes de guardar, ejecutar hashPassword
            beforeSave: hashPassword
        }
        }
    )

    User.prototype.comparePassword = function (password){//cualquier usuario puede comparar la contraseña si es necesario
        return bcrypt.compareAsync(password, this.password)//comparar la contraseña recibida con la contraseña del modelo
    }
    return User
}
   
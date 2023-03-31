module.exports = (sequelize, DataTypes) => {
    const Ruta = sequelize.define('Ruta', {
        name: DataTypes.STRING,
        color: DataTypes.STRING,
        },
        {
        timestamps: false,
        })
    return Ruta
}
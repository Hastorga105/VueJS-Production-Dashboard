module.exports = (sequelize, DataTypes) => {
    const Horas = sequelize.define('Horas', {
        dia: DataTypes.DATEONLY,
        hora: DataTypes.STRING,
        cantidad: DataTypes.INTEGER
        },
        {
        timestamps: false,
        })
    return Horas
}
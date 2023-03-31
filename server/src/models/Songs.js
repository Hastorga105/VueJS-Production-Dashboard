module.exports = (sequelize, DataTypes) => {
    const Song = sequelize.define('Song', {
        titulo: DataTypes.STRING,
        persona: DataTypes.STRING,
        info: DataTypes.STRING,
        },
        {
        timestamps: false,
        })
    return Song
}
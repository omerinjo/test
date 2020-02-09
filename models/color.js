module.exports = (sequelize, DataTypes) => {
    const Color = sequelize.define('Color', {
        colorId: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        name: DataTypes.STRING(255),
    }, { tableName: 'color' });
    Color.associate = function (models) {
        Color.belongsTo(models.Product, { foreignKey: "colorId" })
    };
    return Color;
};
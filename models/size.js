module.exports = (sequelize, DataTypes) => {
    const Size = sequelize.define('Size', {
        sizeId: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        name: DataTypes.STRING(255),
    }, { tableName: 'size' });
    Size.associate = function (models) {
        Size.belongsTo(models.Product, { foreignKey: "sizeId" })
    };
    return Size;
};
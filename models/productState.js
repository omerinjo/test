module.exports = (sequelize, DataTypes) => {
    const ProductState = sequelize.define('ProductState', {
        productStateId: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        name: DataTypes.STRING(255),
    }, { tableName: 'productState' });
    ProductState.associate = function (models) {
        ProductState.belongsTo(models.Product, { foreignKey: "productStateId" })

    };
    return ProductState;
};
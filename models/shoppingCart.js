module.exports = (sequelize, DataTypes) => {
    const ShoppingCart = sequelize.define('ShoppingCart', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        userId: DataTypes.INTEGER,
        productId: DataTypes.INTEGER,
        approval: DataTypes.BOOLEAN,
    }, { tableName: 'shoppingcart' });
    ShoppingCart.associate = function (models) {
        ShoppingCart.belongsTo(models.User, { foreignKey: "userId" })
    };
    return ShoppingCart;
};
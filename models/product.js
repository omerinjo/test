module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        name: DataTypes.STRING(255),
        description: DataTypes.STRING(255),
        productStateId: DataTypes.INTEGER,
        colorId: DataTypes.INTEGER,
        sizeId: DataTypes.INTEGER,
        price: DataTypes.DECIMAL(10, 2)
    }, { tableName: 'product' });
    Product.associate = function (models) {
        Product.hasOne(models.Color, { foreignKey: "colorId" })
        Product.hasOne(models.Size, { foreignKey: "sizeId" })
        Product.hasOne(models.ProductState, { foreignKey: "productStateId" })
    };
    return Product;
};
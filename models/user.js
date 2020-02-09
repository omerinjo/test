module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        name: DataTypes.STRING(255),
        address: DataTypes.STRING(255),
        password: DataTypes.STRING,
        userRoleId: DataTypes.INTEGER,
    }, { tableName: 'user' });
    User.associate = function (models) {
        User.hasMany(models.ShoppingCart, { foreignKey: "userId" })
        User.hasOne(models.UserRole, { foreignKey: "userRoleId" })
    }
    return User;
};
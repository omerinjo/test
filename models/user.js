module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        firstName: DataTypes.STRING(255),
        lastName: DataTypes.STRING(255),
        email: DataTypes.STRING,
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        role: DataTypes.STRING,
    }, { tableName: 'user' });
    User.associate = function (models) {
        //  User.hasMany(models.ShoppingCart, { foreignKey: "userId" })
        // User.hasOne(models.UserRole, { foreignKey: "userRoleId" })
    }
    return User;
};
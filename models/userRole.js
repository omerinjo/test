module.exports = (sequelize, DataTypes) => {
    const UserRole = sequelize.define('UserRole', {
        userRoleId: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        name: DataTypes.STRING(255),
    }, { tableName: 'userrole' });
    UserRole.associate = function (models) {
        UserRole.belongsTo(models.User, { foreignKey: "userRoleId" })
    }
    return UserRole;
};
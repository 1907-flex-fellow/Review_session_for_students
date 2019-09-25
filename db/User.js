const { conn } = require('./conn');
const { Sequelize } = conn;
const { UUID, UUIDV4, STRING } = Sequelize;

const User = conn.define('user', {
    id: {
        type: UUID,
        primaryKey: true,
        defaultValue: UUIDV4
    },
    name: {
        type: STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
});

module.exports = User;
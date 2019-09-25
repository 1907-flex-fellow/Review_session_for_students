const { conn } = require('./conn');
const { Sequelize } = conn;
const { UUID, UUIDV4, STRING, TEXT, BOOLEAN } = Sequelize;

const Note = conn.define('note', {
    id: {
        type: UUID,
        primaryKey: true,
        defaultValue: UUIDV4
    },
    text: {
        type: TEXT,
    },
    archived: {
        type: BOOLEAN,
        defaultValue: false
    }
});

module.exports = Note;
const { conn } = require('./conn');
const User = require('./User');
const Note = require('./Note');

Note.belongsTo(User);
User.hasMany(Note);

const syncAndSeed = async() => {
    await conn.sync({ force: true });
    const users = [
        { name: 'moe' },
        { name: 'larry' },
        { name: 'curly' }
    ]
    const notes = [
        { text: 'javascript is great!' },
        { text: 'python is also great!'},
        { text: 'c++ is hard'}
    ]
    const [moe, larry, curly] = await Promise.all( users.map( user => User.create(user)));
    await Promise.all( notes.map( note => Note.create({...note, userId: moe.id})))
}

module.exports = {
    syncAndSeed,
    models: {
        User,
        Note,
    }
}
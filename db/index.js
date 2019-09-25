const { conn } = require('./conn');

const User = require('./User');

const syncAndSeed = async() => {
    await conn.sync({ force: true });
    const users = [
        { name: 'moe' },
        { name: 'larry' },
        { name: 'curly' }
    ]
    await Promise.all( users.map( user => User.create(user)));
}

module.exports = {
    syncAndSeed,
    models: {
        User,
    }
}
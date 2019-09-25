const Sequelize = require('sequelize');

const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/review_for_senior', { logging: false });

module.exports = {
    conn,
}


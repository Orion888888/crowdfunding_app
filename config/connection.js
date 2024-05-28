const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.DB_URL) {
  sequelize = new Sequelize(process.env.DB_URL);
} else {
  const dbName = process.env.DB_NAME;
  const dbUser = process.env.DB_USER;
  const dbPassword = process.env.DB_PASSWORD;

  if (!dbName || !dbUser || !dbPassword) {
    console.error('Environment Variables:', {
      DB_NAME: dbName,
      DB_USER: dbUser,
      DB_PASSWORD: dbPassword
    });
    throw new Error('Missing required environment variables: DB_NAME, DB_USER, or DB_PASSWORD');
  }

  sequelize = new Sequelize(dbName, dbUser, dbPassword, {
    host: 'localhost',
    dialect: 'postgres',
    port: 3003
  });
}

module.exports = sequelize;
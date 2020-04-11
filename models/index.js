const Sequelize = require('sequelize')
const TeamsModel = require('./teams')

const connection = new Sequelize('nfl', 'football', 'F00tB4LL!', {
  host: 'localhost', dialect: 'mysql',
})

const Teams = TeamsModel(connection, Sequelize)

module.exports = { Teams }

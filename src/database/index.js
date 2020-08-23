const Sequelize = require('sequelize')
const dbconfig = require('../config/database.js')

const connection = new Sequelize(dbconfig)

module.exports = connection
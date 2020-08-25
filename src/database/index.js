const Sequelize = require('sequelize')
const dbconfig = require('../config/database.js')

const User = require('../models/User')
const Address = require('../models/Address')

const connection = new Sequelize(dbconfig)

User.init(connection)
Address.init(connection)

Address.associate(connection.models) // Toda vez que damos um init(connection) o Sequelize cadastra nosso model dentro de um array chamado models na nossa variável connection. Poderiamos tambem fazer um array com todos os models da nossa aplicação, porém não tem necessidade.

module.exports = connection
const Sequelize = require('sequelize')
const dbconfig = require('../config/database.js')

const User = require('../models/User')
const Address = require('../models/Address')
const Tech = require('../models/Tech')

const connection = new Sequelize(dbconfig)

User.init(connection)
Address.init(connection)
Tech.init(connection)

User.associate(connection.models)
Address.associate(connection.models) // Toda vez que damos um init(connection) o Sequelize cadastra nosso model dentro de um array chamado models na nossa variável connection. Poderiamos tambem fazer um array com todos os models da nossa aplicação, porém não tem necessidade.
Tech.associate(connection.models)

module.exports = connection
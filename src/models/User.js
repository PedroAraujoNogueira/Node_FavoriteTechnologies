const { Model, DataTypes } = require('sequelize')

class User extends Model {
    static init(sequelize){ // Esse método init é padrão do sequelize e ele vai receber a conexão com a base de dados. 
        super.init({
            // O sequelize entende automaticamente os campos id, created_at e updated_at.
            name: DataTypes.STRING,
            email: DataTypes.STRING
        }, {
            // Esse objeto vai receber a configuração com o banco de dados.
            sequelize
        })

    }
}

module.exports = User
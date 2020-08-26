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

    static associate(models){
        this.hasMany(models.Address, { foreignKey: 'user_id', as: 'addresses' }) // Aqui estamos dizendo que um usuário pode ter vários endereços.
    } 

}

module.exports = User
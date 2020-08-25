const { Model, DataTypes } = require('sequelize')

class Address extends Model {
    static init(sequelize){ 
        super.init({
            zipcode: DataTypes.STRING,
            street: DataTypes.STRING,
            number: DataTypes.INTEGER
        }, {
            sequelize
        })
    }

    static associate(models){
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' }) // Aqui estamos dizendo que o endereço pertence a um usuário. Ou seja, cada endereço pertence a apenas um usuário.
    }

}

module.exports = Address
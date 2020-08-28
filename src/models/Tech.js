const { Model, DataTypes } = require('sequelize')

class Tech extends Model {
    static init(sequelize){ 
        super.init({
            name: DataTypes.STRING,
        }, {
            sequelize,
            tableName: 'techs' // Tive que especificar o nome da tabela pq o Sequelize fez a pluralização do nome do Model(Tech) para teches e como quero que o nome da tabela seja techs então tenho que deixar isso explícito.
        })
    }

    static associate(models){
        this.belongsToMany(models.User, { foreignKey: 'techs_id', through: 'user_techs', as: 'users' }) // Sempre que for um relacionamento de N:N usaremos o belongsToMany nos dois Models que fazem parte dessa relação.
    } 

}

module.exports = Tech
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('addresses', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'users', key: 'id'},
        // O onUpdate e o onDelete vão dizer o que vai acontecer com o campo user_id caso o KEY(id) do MODEL(users) que ela está referenciando seja atualizado com um novo valor ou deletado.
        onUpdate: 'CASCADE', // O CASCADE vai replicar a alteração que houve no KEY do Model no user_id
        onDelete: 'CASCADE' // O CASCADE no onDelete funciona da mesma forma, entao o que vai acontecer com os endereços de um user que foi deletado? No caso do CASCADE os endereços também serão deletados.
      },
      zipcode: {
        type: Sequelize.STRING,
        allowNull: false
      },
      street: {
        type: Sequelize.STRING,
        allowNull: false
      },
      number: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('addresses');
  }
};

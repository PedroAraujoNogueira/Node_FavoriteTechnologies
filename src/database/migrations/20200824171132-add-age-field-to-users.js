'use strict';

// Essa Migration foi feita apenas como demonstração para o caso de querer adicionar uma nova coluna em uma tabela que já está em produção. Porém ela nao foi de fato usada no projeto.

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('users', 
    'age', { type: Sequelize.INTEGER }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('users', 
    'age'
    );
  }
};

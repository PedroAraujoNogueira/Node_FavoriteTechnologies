const { Op } = require('sequelize')
const User = require('../models/User')

module.exports = {
    async show(req, resp) {

        // Encontrar todos os usuários que tem email que termina com  @rocketseat.com.br.
        // Desses usuários eu quero buscar todos que moram na rua que contém a palavra "firmino".
        // Desses usuários eu quero mostrar as tecnologias que começam com React, mas se o usuário não tiver tecnologia que comece com React mostre ele mesmo assim porém sem mostrar suas tecnologias.
        
        const users = await User.findAll({
            attributes: ['name', 'email'],
            where: {
                email: {
                    [Op.iLike]: '%@gmail.com'
                }
            },
            include: [{
                association: 'addresses', where: { street: { [Op.iLike]: '%Firmino%' }}
            }, // include de endereços.
            {
                association: 'techs', 
                required: false,
                where: {
                    name: {
                        [Op.iLike]: 'NodeJS%'
                    } // include de techs.
                }
            }]
        })

        return resp.json(users)
    }
}
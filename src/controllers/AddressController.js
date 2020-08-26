const Address = require('../models/Address')
const User = require('../models/User')

module.exports = {
    async index(req, resp){
        const { user_id } = req.params
        
       
        const user = await User.findByPk(user_id, {
            include: { association: 'addresses' } // Esse include serve para incluirmos algum tipo de relacionamento dentro dos valores que irão ser retornados nessa consulta.
        })
        
        if(!user){
            return resp.status(400).json({ error: { message: "User not found." } })
        }

        // const addresses = await Address.findAll({ where: { user_id }}) // Essa nova requisição pode ser otimizada fazendo somente uma requisição e para isso passamos o atributo include no segundo parametro da função findByPk.

        return resp.json(user) // Ou resp.json(user.addresses) caso quisessemos retornar apenas os endereços.

    },
    async store(req, resp){
        const { user_id } = req.params
        const { zipcode, street, number } = req.body

        const user = await User.findByPk(user_id) // Encontra o usuário pelo id dele.
        
        if(!user){
            return resp.status(400).json({ error: { message: 'User not found.'}})
        }
        const address = await Address.create({ user_id, zipcode, street, number })

        return resp.json(address)
    }
 }
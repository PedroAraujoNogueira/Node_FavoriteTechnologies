const Tech = require('../models/Tech')
const User = require('../models/User') 

module.exports = {
    async index(req, resp){
        const { user_id } = req.params
        
        
        const user = await User.findByPk(user_id, {
            include: { association: 'techs', through: { attributes: [] }}
        })
        
        if(!user){
            return resp.status(400).json({ error: { message: "User not found."}})
        }
        
        return resp.json(user)

    },

    async store(req, resp){
        const { user_id } = req.params
        const { name } = req.body

        const user = await User.findByPk(user_id)

        if(!user){
            return resp.status(400).json({ error: { message: 'User not found.' }})
        }

        const [ tech, created ] = await Tech.findOrCreate({ where: { name }}) // O método findOrCreate vai tentar encontrar e caso não encontre irá criar. O retorno desse método é um array de duas posições, na primeira posição é retornado as tecnologias encontradas por esse método(ou a que foi criada) e na segunda posição é retornado um booleano indicando se ela foi criada agora(true) ou não(false).

        await user.addTech(tech) // Cria uma linha na tabela pivô com o user e a tech desse user.
        // await tech.addUser(user) // Tanto faz dessa forma como da forma acima.

        return resp.json(tech)
    },

    async delete(req, resp) {
        const { user_id } = req.params
        const  { name } = req.body

        const user = await User.findByPk(user_id)

        if(!user){
            return resp.status(400).json({ error: { message: "User not found." }})
        }

        const tech = await Tech.findOne({ where: { name }})

        await user.removeTech(tech)

        return resp.json()
    }
}
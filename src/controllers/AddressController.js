const Address = require('../models/Address')
const User = require('../models/User')

module.exports = {
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
const User = require('../models/User')

module.exports = {
    async index(req, resp){
        users = await User.findAll()

        return resp.json(users)
    },
    async store(req, resp){
        const { email, name } = req.body

        const user = await User.create({ name, email})

        return resp.json(user)
    }
}
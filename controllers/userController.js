const User = require('../models/User');

userController = {
    register: async function register(req, res) {
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })

        try {
            const saveUser = await user.save();
            res.send(saveUser);
        } catch (error) {
            res.status(400).send(error);
        }
    },
    login: function (req, res) {
        console.log('login')
        res.send('login')
    },
}

module.exports = userController;
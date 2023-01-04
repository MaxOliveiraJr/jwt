const User = require('../models/User');
const bcrypt = require('bcryptjs');

userController = {
    register: async function register(req, res) {

        const validateEmail = await User.findOne({ email: req.body.email });
        if (validateEmail) return res.status(400).send('E-mail exist');

        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password)
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
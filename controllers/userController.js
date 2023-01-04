const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

userController = {
    register: async function register(req, res) {

        const validateEmail = await User.findOne({ email: req.body.email });
        if (validateEmail) return res.status(400).send('Email exist');

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
    login: async function (req, res) {
        const selectedUser = await User.findOne({ email: req.body.email });
        if (!selectedUser) return res.status(400).send('Email or Password incorrect');

        const userMath = bcrypt.compareSync(req.body.password, selectedUser.password);

        if (!userMath) return res.status(400).send('Email or Password incorrect');

        const token = jwt.sign({_id:selectedUser._id},process.env.TOKEN_SECRET);

        res.header('authorization-token',token);

        
        res.send("User Logger");
    },
}

module.exports = userController;
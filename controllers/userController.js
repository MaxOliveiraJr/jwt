userController = {
    register: function register(req, res) {
        console.log('register')
        res.send('register')
    },
    login: function (req, res) {
        console.log('login')
        res.send('login')
    },
}

module.exports = userController;
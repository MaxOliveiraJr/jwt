const joi = require('@hapi/joi');

const registerValidate = (data) => {
    const schema = joi.object({
        name: joi.string().required().min(3).max(30),
        email: joi.string().required().min(3).max(30),
        password: joi.string().required().min(6).max(100)
    })

    return schema.validate(data);
}

const loginValidate = (data) => {
    const schema = joi.object({
        email: joi.string().required().min(3).max(30),
        password: joi.string().required().min(6).max(100)
    })

    return schema.validate(data);
}

module.exports.loginValidate = loginValidate;
module.exports.registerValidate = registerValidate;

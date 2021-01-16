const Joi = require('joi');

const loginValidation = response => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(8).max(2048).required()
    });
    return schema.validate(response);
}

const registerValidation = response => {
    const schema = Joi.object({
        fname: Joi.string().min(3).max(100).required(),
        lname: Joi.string().min(3).max(100).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(8).max(2048).required()
    });
    return schema.validate(response);
}

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
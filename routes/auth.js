const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { registerValidation, loginValidation } = require('../validation/validation');

router.post('/register', async(req, res) => {
    const { error } = registerValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) return res.status(400).send(`${req.body.email} already exists`);

    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);

    const user = new User({
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        password: hashedPass
    });
    try {
        const userDetail = await user.save();
        res.status(201).send(`${userDetail.email} added successfully`);
    } catch (err) {
        res.status(400).send(err);
    }
});

router.post('/login', async(req, res) => {
    const { error } = loginValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let existingUser = await User.findOne({ email: req.body.email });
    if (!existingUser) return res.status(400).send(`Email doesn't exist, try to register`);

    const validPass = await bcrypt.compare(req.body.password, existingUser.password);

    if (!validPass) return res.status(400).send('Invalid Password');

    const token = jwt.sign({ _id: existingUser._id },
    process.env.AUTHORIZATION_TOKEN, {
        expiresIn: 300,
    });
    res.header('x-access-token', token);
    res.header('Access-Control-Expose-Headers', "x-access-token");

    res.status('200').send(existingUser)

});


module.exports = router;
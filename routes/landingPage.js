const router = require('express').Router();
const verify = require('./verifyToken');

router.get('/', verify, (req, res) => {
    res.json({ message: 'Hello World with Authentication!' })
})

module.exports = router;
const router = require('express').Router();

router.post('/register', (req, res) => {
    console.log('router');
});

router.get('/register', (req, res) => {
    res.send('registered');
})

module.exports = router;
const jwt = require('jsonwebtoken');


module.exports = auth = (req, res, next) => {
    const token = req.headers['x-access-token'];
    if (!token) return res.status(401).send('Access Denied');

    try {
        const verified = jwt.verify(token, process.env.AUTHORIZATION_TOKEN);
        req.user = verified;
        next();
    } catch (err) {
        res.status(400).send('Invalid Token');
    }
}
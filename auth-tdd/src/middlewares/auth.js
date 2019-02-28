const jwt = require('jsonwebtoken');
const { promisify } = require('util');

module.exports = async (req, res, next) => {
    const authorization = req.headers.authorization;

    if( !authorization ) {
        return res.status(401).json({ message: 'Token not provided' });
    }

    const [, token] = authorization.split(' ');

    try {
        const decoded = await promisify(jwt.verify)(token, process.env.APP_SECRET);
        req.userId = decoded.userId;
        return next();
    } catch (error) {
        return res.status(401).json({ message: 'Token invalid' });
    }
}
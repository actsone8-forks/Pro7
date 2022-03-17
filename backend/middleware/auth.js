const jwt = require('jsonwebtoken');

validateToken = (req, res, next) => {
    const token = req.headers.token;
    if(!token){
        return res.status(401).send('Access denied');
    }
    try{
        const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
        req.token = decodedToken;
        next();
    }catch(err){
        res.status(400).send('Invalid token');
    }
}
module.exports = validateToken;
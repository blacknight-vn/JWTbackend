const jwt = require('jsonwebtoken');
const dotenv = require('dotenv')
dotenv.config();

const middlewareIndex = (req, res) => {

    let accessToken = req.headers['x-access-token'];
    if (accessToken) {

        jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
            if (err) res.status(202).json({authorization: false, message: 'Verify AccessToken Failed'});
            res.status(200).json({authorization: true, message: 'Access Successfully'});
        })

    } else {
        res.status(202).json({authorization: false, message: 'Do Not Have AccessToken'})
    }
}

module.exports = middlewareIndex;
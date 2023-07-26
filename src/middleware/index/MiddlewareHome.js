const serviceHome = require('../../service/index/ServiceHome');

const middlewareHome = async (req, res) => {
    let email = req.email;

    let message = await serviceHome(email);

    if (message.authorization) {
        res.status(200).json({authorization: true, message: message.message})
    } else {
        res.status(200).json({authorization: false, message: message.message})
    }
}

module.exports = middlewareHome;
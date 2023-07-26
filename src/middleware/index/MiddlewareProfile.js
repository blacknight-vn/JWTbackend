const serviceProfile = require('../../service/index/ServiceProfile');

const middlewareProfile = async (req, res) => {
    let userEmail = req.email;
    let message = await serviceProfile(userEmail);
    if (message.authorization) {
        res.status(200).json({authorization: true, message: message.message, user: message.user});
    } else {
        res.status(200).json({authorization: false, message: message.message})
    }
}

module.exports = middlewareProfile;
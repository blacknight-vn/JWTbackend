const db = require('../../models/index');
const sequelize = require('sequelize');

const serviceHome = async (email) => {
    let user = await db.User.findOne({
        where: {email: email}
    });
    if (user) {
        let userInfo = {id: user.id, username: user.username, img: user.img, introduction: user.introduction, createdAt: user.createdAt};
        
        
    } else {
        return ({authorization: false, message: 'No Email Validated in Access Token That was sent'})
    }
}

module.exports = serviceHome;
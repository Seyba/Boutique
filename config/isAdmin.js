const User = require('../models/user')

async function isAdmin(req, res, next){
    const {email} = req.user
    const adminUser = await User.findOne({ email })
    if (adminUser.role !== "admin") {
        //throw new Error("You are not an admin user!")
        res.status(401).json('You are not an admin user!')
    } else {
        next()
    }
}
module.exports = isAdmin
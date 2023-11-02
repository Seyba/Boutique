const User = require('../../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

async function create(req, res){
    try {
        
        const user = await User.create(req.body)
        const token = createJWT(user)
        console.log(user)
        res.json(token)
        
    } catch (error) {
        res.status(400).json(error)
    }
} 

async function getUsers(req, res){
    try {
        const users = await User.find({})
        
        console.log(users)
        res.json(users)
        
    } catch (error) {
        res.status(400).json(error)
    }
}

async function getSingleUser(req, res){
    const { id } = req.params
    try {
        const user = await User.findById(id)
        
        res.json(user)
        
    } catch (error) {
        res.status(400).json(error)
    }
}


async function login(req, res){
    try {
        const user = await User.findOne({email: req.body.email})
        if(!user) throw new Error()

        const match = await bcrypt.compare(req.body.password, user.password)
        if(!match) throw new Error("Wrong Credentials!")

        const token = createJWT(user)
        res.json(token)
        
    } catch (error) {
        console.log(error)
        res.status(404).json(error)
    }
}

async function adminLogin(req, res){
    try {
        const { email, password} = req.body

        //* check for user
        const admin = await User.findOne({email})
        const match = await bcrypt.compare(password, admin.password)

        if(admin.role !== 'admin') throw new Error('Not Authorized!')

        if(admin && match){

        }
    } catch (error) {
        console.log(error)
        res.status(404).json(error)
    }
}

async function updateUser(req, res){
    const { id } = req.params
    try {
        const user = await User.findByIdAndUpdate(id, req.body,{new: true})
        console.log(user)
        res.json(user)
    } catch (error) {
        console.log(error)
        res.status(404).json(error)
    }
}
async function unSubscribe(req, res){
    const { id } = req.params
    try {
        const user = await User.findByIdAndDelete(id)
        res.json(user)
    } catch (error) {
        console.log(error)
        res.status(404).json(error)
    }
}

async function checkToken(req, res) {
    // req.user will always be there for you when a token is 
    console.log('req.user', req.user);
    res.json(req.exp);
}
//* Helper function to create jwt token
function createJWT(user) {return jwt.sign({ user },process.env.SECRET,{ expiresIn: '24h' })}

module.exports = {create, login, getSingleUser, getUsers, checkToken, updateUser, unSubscribe}
const User = require('../../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const Cart = require('../../models/cartModel')
const Coupon = require('../../models/couponModel')
const Product = require('../../models/productModel')

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
        
        if(admin === null) throw new Error('Not user found!')

        const match = await bcrypt.compare(password, admin.password)

        if(admin.role !== 'admin') throw new Error('Not Authorized!')
        
        
        //console.log('admin')
        if(admin && match){
            const token = createJWT(admin)
            res.json(token)
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

async function blockUser(req, res){
    const { id } = req.params
    try {
        const userBlocked = await User.findByIdAndUpdate(id, {isBlocked: true}, {new: true})
        res.json({
            message: 'User is Blocked!'
        })
    } catch (e) {
        res.status(404).json(e)
    }
}

async function unblockUser(req, res){
    const { id } = req.params
    try {
        const userUnlocked = await User.findByIdAndUpdate(id, {isBlocked: false}, {new: true})
        res.json({
            message: 'User is Unblocked!'
        })
    } catch (e) {
        res.status(404).json(e)
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

async function saveAddress(req, res, next){
    const {_id } = req.user
    try{
        const user = await User.findByIdAndUpdate(
            _id, 
            {address: req?.body?.address}, 
            {new: true}
        )
        res.json(user)
    }catch(e){
        res.status(404).json(e)
    }

}


async function getWishList(req, res){
    const { _id } = req.user
    try {
        const user = await User.findById(_id).populate("wishlist")
        res.json(user)
    } catch (e) {
        res.status(404).json(e)
    }
}

async function userCart(req, res) {
    const { cart } = req.body
    const { _id } = req.user

    try {
        let products = []
        const user = await User.findById(_id)
        
        //* Check if user already has items in cart
        const alreadyExist = await Cart.findOne({orderby: user._id})
        if(alreadyExist){
            alreadyExist.remove()
        }

        for(let i = 0; i < cart.length; i++){
            let object = {}
            object.product = cart[i]._id
            object.color = cart[i].color
            object.count = cart[i].count

            let getPrice = await Product.findById(cart[i]._id).select("price").exec()
            object.price = getPrice.price
            products.push(object)
        }

        let cartTotal = 0

        for (let i = 0; i < products.length; i++) {
            cartTotal = cartTotal + products[i].price * products[i].count
        }

        let newCart = await new Cart({
            products,
            cartTotal,
            orderby: user?._id
        }).save()
        res.json(newCart)
        
    } catch (e) {
        res.status(404).json(e)
    }
}

async function getUserCart (req, res){
    const { _id } = req.user
    try {
        const cart = await Cart.findOne({orderby: _id})
            .populate("products.product")
        res.json(cart)
    } catch (e) {
        res.status(404).json(e)
    }
}

async function emptyCart(req, res){

    const { _id } = req.user

    try {
        const user = await User.findOne({_id})
        const cart = await Cart.findOneAndRemove({orderby: user._id})
        res.json(cart)
    } catch (e) {
        res.status(404).json(e)
    }
}

async function applyCoupon(req, res) {
    const { coupon } = req.body
    const { _id } = req.user

    const validCoupon = await Coupon.findOne({name: coupon})

    if(validCoupon === null) res.json({msg: 'Invalid Coupon!'})//throw new error('Invalid Coupon!')

    const user = await User.findOne({_id})
    let { products, cartTotal} = await Cart.findOne({orderby: user._id})
        .populate("products.product")
    let totalAfterDiscount = (cartTotal -(cartTotal * validCoupon.discount) / 100).toFixed(2)

    await Cart.findOneAndUpdate({orderby:user._id}, {totalAfterDiscount}, {new: true})
    
    res.json(totalAfterDiscount)
}

//* Helper function to create jwt token
function createJWT(user) {return jwt.sign({ user },process.env.SECRET,{ expiresIn: '24h' })}

module.exports = {
    adminLogin, 
    applyCoupon,
    blockUser,
    checkToken,
    create, 
    emptyCart,
    getSingleUser, 
    getUserCart,
    getUsers, 
    getWishList,
    login, 
    saveAddress,
    unblockUser,
    updateUser, 
    unSubscribe,
    userCart
}
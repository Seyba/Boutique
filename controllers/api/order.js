const Cart = require('../../models/cart')
const Order = require('../../models/order')
const User = require('../../models/user')
const stripe = require('stripe')(process.env.STRIPE_API)

async function getOrders(req, res){
    const userId = req.params
    try {
        const order = Order.find({userId}).sort({date: -1})
        res.json(order)
        
    } catch (error) {
        res.status(500).json(error)
    }
}

async function checkOut(req, res){
    try {
        const userId = req.params.id;
        const {source} = req.body;
        let cart = await Cart.findOne({userId});
        let user = await User.findOne({_id: userId});
        const email = user.email;

        if(cart ){
            const charge = await stripe.charges.create({
                amount: cart.bill,
                currency: 'inr',
                source: source,
                receipt_email: email
            })

            if(!charge) throw Error('Payment failed');
            if(charge){
                const order = await Order.create({
                    userId,
                    items: cart.items,
                    bill: cart.bill
                })
                const data = await Cart.findByIdAndDelete({_id:cart.id});
                return res.status(201).json(order);
            } 
            
        }else{
            res.status(500).json({msg: "You do not have items in cart"});
        }
    } catch (error) {
        res.status(500).json({msg: "Something went wrong"})
    }
}
module.exports = {checkOut, getOrders}
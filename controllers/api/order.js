const Cart = require('../../models/cart')
const Order = require('../../models/order')
const User = require('../../models/user')
const stripe = require('stripe')(process.env.STRIPE_API)

    // A cart is the unpaid order for a user
    async function cart(req, res) {
    try{
        const cart = await Order.getCart(req.user._id);
        res.status(200).json(cart);
    }catch(e){
        res.status(400).json({ msg: e.message });
    }
    }

    // Add an item to the cart
    async function addToCart(req, res) {
    try{
        const cart = await Order.getCart(req.user._id);
        await cart.addItemToCart(req.params.id);
        res.status(200).json(cart);
    }catch(e){
        res.status(400).json({ msg: e.message });
    }  
    }

    // Updates an item's qty in the cart
    async function setItemQtyInCart(req, res) {
    try{
        const cart = await Order.getCart(req.user._id);
        await cart.setItemQty(req.body.itemId, req.body.newQty);
        res.status(200).json(cart);
    }catch(e){
        res.status(400).json({ msg: e.message });
    }
    }

    // Update the cart's isPaid property to true
    async function checkout(req, res) {
    try{
        const cart = await Order.getCart(req.user._id);
        cart.isPaid = true;
        await cart.save();
        res.status(200).json(cart);
    }catch(e){
        res.status(400).json({ msg: e.message });
    }  
    }

    // Return the logged in user's paid order history
    async function history(req, res) {
    // Sort most recent orders first
    try{
        const orders = await Order
        .find({ user: req.user._id, isPaid: true })
        .sort('-updatedAt').exec();
        res.status(200).json(orders);
    }catch(e){
        res.status(400).json({ msg: e.message });
    }

    }

/*

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
*/
module.exports = {
    cart,
    addToCart,
    setItemQtyInCart,
    checkout,
    history
}
const Cart = require('../../models/cart')
const Item = require('../../models/items')

async function fetchCartItems(req, res){
    const userId = req.params
    try {
        let cart = Cart.findOne(userId)
        if(cart && cart.items.length > 0){
            res.json(cart)
        } else {
            res.json({msg: "empty"})
        } 
    } catch (error) {
        res.status(500).json(error)
    }
}

async function removeCartItem(req, res){
    const userId = req.params.userId;
    const productId = req.params.itemId;
    try {
        let cart = await Cart.findOne({userId});
        let itemIndex = cart.items.findIndex(p => p.productId === productId);
        if(itemIndex > -1){
            let productItem = cart.items[itemIndex];
            cart.bill -= productItem.quantity*productItem.price;
            cart.items.splice(itemIndex,1);
        }

        cart = await cart.save();
        return res.status(201).json(cart);
        
    } catch (error) {
        console.log(error)
        res.status(500).json({msg: "Something went wrong"});
    }
}


async function addCartItem(req, res){
    const userId = req.params
    const { productId, quantity } = req.body

    try {
        let cart = await Cart.findOne({userId});
        let item = await Item.findOne({_id: productId});
        if(!item){
            res.status(404).json({msg: 'Item not found!'})
        }
        const price = item.price;
        const name = item.title;

        if(cart){
            // if cart exists for the user
            let itemIndex = cart.items.findIndex(p => p.productId === productId);

            // Check if product exists or not
            if(itemIndex > -1)
            {
                let productItem = cart.items[itemIndex];
                productItem.quantity += quantity;
                cart.items[itemIndex] = productItem;
            }
            else {
                cart.items.push({ productId, name, quantity, price });
            }
            cart.bill += quantity*price;
            cart = await cart.save();
            return res.status(201).json(cart);
        } else {
            // no cart exists, create one
            const newCart = await Cart.create({
                userId,
                items: [{ productId, name, quantity, price }],
                bill: quantity*price
            });
            return res.status(201).json(newCart);
        }
        
    } catch (error) {
        console.log(error)
        res.status(500).json({msg: "Something went wrong"});
    }
}

/*
async function fetchCartItemById(req, res){
    const { id } = req.params
    try {
        const item = await Cart.findById(id)
        
        res.json(item)
        
    } catch (error) {
        res.status(400).json(error)
    }
}

async function updateCartItem(req, res){
    const { id } = req.params
    try {
        const item = await Cart.findByIdAndUpdate(id, req.body,{new: true})
        console.log(item)
        res.json(item)
    } catch (error) {
        console.log(error)
        res.status(404).json(error)
    }
}
*/




module.exports = {addCartItem, fetchCartItems, removeCartItem}
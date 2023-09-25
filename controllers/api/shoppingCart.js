const ShoppingCart = require('../../models/shoppingCart')
const Item = require('../../models/items')

const populate = {
    path: "shoppingCartDetails", 
    populate: {
        path: "_items",
        model: "item",
        populate: {
            path: "_categories",
            model: "category"
        }
    }
}
async function addItemToCart(req, res){
    
    try {
        const customerCart = await ShoppingCart.findOne({userId: req.user._id})
        const item = await Item.findById(req.body.item._id)
        const cartDetails = {
            product: req.body.item._id,
            quantity: req.body.quantity,
            price: item.price,
            amount: item.price * req.body.quantity
        }
        if(customerCart){
            //* if user already has a shopping cart

            ShoppingCart.findByIdAndUpdate({
                userId: req.userId, 
                "cartDetails.product": req.body.item._id
            },
            {
                $inc: {
                    "shoppingCartDetails.$.quantity": req.body.quantity,
                    "shoppingCartDetails.$.amount": item.price * req.body.quantity
                }
            }, {new: true}
            ).populate(populate).exec().then((data, error) => {
                if(error) return res.json({status: false, error})
                if(data) {
                    res.status(200).json({msg:"product added" })
                } else {
                    //* if item doesn't exist in shopping cart
                    ShoppingCart.findOneAndUpdate({
                        userId: req.userId
                    },
                    {
                        $push: {
                            cartDetails: {...cartDetails}
                        }
                    }, {new: true}).populate(populate).exec().then((data, error) => {
                        if(error) return res.json({status: false, error})
                        if(data) return res.status(200).json({msg: 'item successfully added.', data})
                    })
                }
            })
        } else {
            //* if user's cart doesn't exist create a new one
            const newCart = new ShoppingCart({
                userId: req.userId,
                cartDetails
            })
            newCart.save((error, data) =>{
                if(error) return res.json({status: false, error})
                if(data) return res.json({msg:"Item successfully added", data})
            })

        }
        res.json(customerCart, item)
    } catch (error) {
        res.json({msg: 'Ooops, something went wrong'})
    }
}

async function fetchCart(req, res){
    try {
        ShoppingCart.findOne({userId: req.userId})
            .populate(populate).exec((error, data) => {
                if(error) return res.json({status: false, error})
                return res.status(200).json({msg: "User Cart successfully found", data})
            })
    } catch (error) {
        res.json(error)
    }

}
module.exports = { addItemToCart, fetchCart}
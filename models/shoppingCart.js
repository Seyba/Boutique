const mongoose = require('mongoose')
const { Schema, model } = mongoose
const OrderDetails = require('./orderDetails').schema

const shoppingCart = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    //cartDetails: {type: [OrderDetails.Schema], required: true }
    cartDetails: [
        {
            type: OrderDetails
        }
    ]
    
})

const ShoppingCart = model('ShoppingCart', shoppingCart)
module.exports = ShoppingCart
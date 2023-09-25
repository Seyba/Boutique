const mongoose = require('mongoose')
const { Schema, model } = mongoose

const orderDetailSchema = new Schema({
    itemId: {
        type: Schema.Types.ObjectId,
        ref: 'Item',
        required: true
    },
    price: {
        type: Number
    },
    quantity: {
        type: Number,
        required: true
    },
    amount: {
        type: Number

    }
    
},{timestamps: true})

const OrderDetails = model('OrderDetails', orderDetailSchema)
module.exports = OrderDetails
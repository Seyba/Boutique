const mongoose = require('mongoose')
const { model, Schema } = mongoose

const OrderSchema = new Schema({
    userId: {
        type: String,
    },
    items: [{
        productId: {
            type: String,
        },
        name: String,
        quantity: {
            type: Number,
            required: true,
            min: [1, 'Quantity can not be less then 1.']
        },
        price: Number
    }],
    bill: {
        type: Number,
        required: true
    },
    date_added: {
        type: Date,
        default: Date.now
    }
})

const Order = model('Order', OrderSchema)
module.exports = Order
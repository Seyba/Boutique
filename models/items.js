const mongoose = require('mongoose');
const { Schema, model } = mongoose


const itemSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    imgSrc: {
        type: String,
        require: true
    },
    imgAlt: {
        type: String,
        require: true,
    },
    date_added: {
        type: Date,
        default: Date.now
    },
});
const Item = model('Item', itemSchema)

module.exports = Item
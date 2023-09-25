const mongoose = require('mongoose')
const { Schema } = mongoose

const productSchema = new Schema({
  name: { type: String, required: true },
  description: {type: String, required: true},
  img: String,
  imgAlt: String,
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  price: { type: Number, required: true, default: 0 }
}, {
  timestamps: true
});

module.exports = productSchema;
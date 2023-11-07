const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
const prodCategorySchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true,
        index:true,
    }
}, {timestamps: true});

//Export the model
module.exports = mongoose.model('Category', prodCategorySchema);
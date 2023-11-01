const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const { Schema, model } = mongoose


const SALT_ROUNDS = 6

const userSchema = new Schema({
    name: {type: String, required: true}, 
    email: {
        type: String, 
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: { 
        type: String, 
        trim: true,
        minLength: 3,
        required: true
    },
    
    role: {
        type: String, 
        default: "user"
    },
    isBlocked: {
        type: Boolean,
        default: false
    },
    cart: {
        type: Array,
        default: []
    },
    address: {
        type: String
    },
    wishlist: [{type: Schema.Types.ObjectId, ref: "Product"}],
}, {
    timestamps: true,
    toJSON: { transform: function(doc, ret){
        delete ret.password
        return ret
    }}
})

userSchema.pre('save', async function(next){
    if(!this.isModified('password')) return next()
    this.password = await bcrypt.hash(this.password, SALT_ROUNDS)
    return next()
})

const User = model('User', userSchema)

module.exports = User
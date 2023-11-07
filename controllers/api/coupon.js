const Coupon = require('../../models/couponModel')

async function createCoupon(req, res) {
    try {
        const newCoupon = await Coupon.create(req.body)
        res.json(newCoupon)
    } catch (e) {
        res.status(404).json(e)
    }
}

async function updateCoupon(req, res) {
    const { id } = req.params
    try {
        const coupon = await Coupon.findByIdAndUpdate(id, req.body, {new: true})
        res.json(coupon)
    } catch (e) {
        res.status(404).json(e)
    }
}

async function getCoupon(req, res) {
    const { id } = req.params
    try {
        const coupon = await Coupon.findById(id)
        res.json(coupon)
    } catch (e) {
        res.status(404).json(e)
    }
}

async function getCoupons(req, res) {
    try {
        const coupon = await Coupon.find({})
        res.json(coupon)
    } catch (e) {
        res.status(404).json(e)
    }
}

async function deleteCoupon(req, res) {
    const { id } = req.params
    try {
        const coupon = await Coupon.findByIdAndDelete(id)
        res.json({msg: "Coupon deleted!"})
    } catch (e) {
        res.status(404).json(e)
    }
}


module.exports = {createCoupon, deleteCoupon, getCoupon, getCoupons, updateCoupon}
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
module.exports = {createCoupon, updateCoupon}
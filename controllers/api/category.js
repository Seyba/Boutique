const Category = require('../../models/ProdCategoryModel')

async function createCategory(req, res) {
    try {
        const newCategory = await Category.create(req.body)
        res.json(newCategory)
    } catch (e) {
        res.status(404).json(e)
    }
}

async function updateCategory(req, res) {
    const { id } = req.params
    try {
        const category = await Category.findByIdAndUpdate(id, req.body, {new: true})
        res.json(category)
    } catch (e) {
        res.status(404).json(e)
    }
}

async function getCategory(req, res) {
    const { id } = req.params
    try {
        const category = await Category.findById(id)
        res.json(category)
    } catch (e) {
        res.status(404).json(e)
    }
}

async function getCategories(req, res) {
    try {
        const categories = await Category.find({})
        res.json(categories)
    } catch (e) {
        res.status(404).json(e)
    }
}

async function deleteCategory(req, res) {
    const { id } = req.params
    try {
        const category = await Category.findByIdAndDelete(id)
        res.json({msg: "Category deleted!"})
    } catch (e) {
        res.status(404).json(e)
    }
}


module.exports = {createCategory, deleteCategory, getCategory, getCategories, updateCategory}
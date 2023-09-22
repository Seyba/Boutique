const Item = require('../../models/items')

async function fetchItems(req, res){
    try {
        const items = await Item.find().sort({date: -1})
        
        console.log(items)
        res.json(items)
        
    } catch (error) {
        res.status(400).json(error)
    }
}

async function fetchItemById(req, res){
    const { id } = req.params
    try {
        const item = await Item.findById(id)
        
        res.json(item)
        
    } catch (error) {
        res.status(400).json(error)
    }
}

async function updateItem(req, res){
    const { id } = req.params
    try {
        const item = await Item.findByIdAndUpdate(id, req.body,{new: true})
        console.log(item)
        res.json(item)
    } catch (error) {
        console.log(error)
        res.status(404).json(error)
    }
}

async function addItem(req, res){
    const newItem = req.body
    try {
        const insertedItem = await Item.inserOne(newItem)
        console.log(insertedItem)
        res.json(insertedItem)
    } catch (error) {
        console.log(error)
        res.status(404).json(error)
    }
}

async function removeItem(req, res){
    const { id } = req.params
    try {
        const item = await Item.findByIdAndDelete(id)
        res.json(item)
    } catch (error) {
        console.log(error)
        res.status(404).json(error)
    }
}



module.exports = {addItem, fetchItems, fetchItemById, removeItem, updateItem}
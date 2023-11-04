const Product = require('../../models/productModel')
const slugify = require('slugify')


async function createProduct(req, res){
  try {
    if(req.body.title){
      req.body.slug = slugify(req.body.title)
    }
    const newProd = Product.create(req.body)
    res.json(newProd)
  } catch (e) {
    res.status(400).json({ msg: e.message })
  }
}

async function getAllProducts(req, res) {
  try{
    const items = await Product.find({}).sort('name').populate('category').exec();
    // re-sort based upon the sortOrder of the categories
    items.sort((a, b) => a.category.sortOrder - b.category.sortOrder);
    res.status(200).json(items);
  }catch(e){
    res.status(400).json({ msg: e.message });
  }
}

async function getProdById(req, res) {
  try{
    const item = await Product.findById(req.params.id);
    res.status(200).json(item);
  }catch(e){
    res.status(400).json({ msg: e.message });
  }  
}

module.exports = {
  createProduct,
  getAllProducts,
  getProdById
};
  
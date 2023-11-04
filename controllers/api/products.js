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

async function getProducts(req, res) {
  try {
    //* filtering
    const queryObj = {...req.query}
    const excludeFields = ['page', 'sort', 'limit','fields']
    excludeFields.map(el => delete queryObj[el])

    let queryStr = JSON.stringify(queryObj)
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`)

    let query = Product.find(JSON.parse(queryStr))
    
    //* sorting
    if(req.query.sort){
      const sortBy = req.query.sort.split(",").join(" ")
      query = query.sort(sortBy)
    } else {
      query = query.sort('-createdAt')
    }

    //* Limiting the fields
    if(req.query.fields) {
      const fields = req.query.fields.split(",").join(" ")
      query = query.select(fields)
    } else {
      query = query.select("-v__")
    }

    //* Pagination
    const page = req.query.page
    const limit = req.query.limit
    const skip = (page - 1) * limit
    console.log(page, limit, skip)
    query = query.skip(skip).limit(limit)
    if(req.query.page) {
      const prodCount = await Product.countDocuments()
      if(skip >= prodCount) throw new Error("This page does not exist!")
    }
    const prods = await query
    res.json(prods)
  } catch (e) {
    res.status(400).json({ msg: e.message })
  }
  
}

async function updateProduct(req, res) {
  const { id } = req.params
  try {
    if(req.body.title) {
      req.body.slug = slugify(req.body.title)
    }
    const updateProd = await Product.findByIdAndUpdate(id, req.body, {new: true})
    res.json(updateProd)
  } catch (e) {
    res.status(400).json({ msg: e.message })
  }
}


async function deleteProduct(req, res) {
  const { id } = req.params
  try {
    const product = await Product.findByIdAndDelete(id)
    res.json({msg: "Prodcut deleted!"})
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
  deleteProduct,
  getAllProducts,
  getProdById,
  getProducts,
  updateProduct
};
  
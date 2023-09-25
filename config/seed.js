require('dotenv').config();
const databaseConnection = require('./database')
const Category = require('../models/category');
const Product = require('../models/products');

(async function() {

  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Skincare', sortOrder:10},
    {name: 'Fragrance', sortOrder: 20},
    {name: 'Haircare', sortOrder:30},
    {name: 'Nailcare', sortOrder: 40},
    {name: 'Beauty Tool', sortOrder: 50},
    {name: 'Makeup', sortOrder: 60}
    
  ]);

  await Product.deleteMany({});
  const products = await Product.create([
    {
        name: 'Bliss Sleep Mask', 
        description:'Indulge your senses with the captivating aroma of Chanel. This exquisite fragrance is carefully crafted with a blend of Eau De Perfume. It offers a harmonious balance of Smell. Chanel Paris is the perfect companion for any occasion.', 
        img: 'https://assets.website-files.com/6489a11ade23496cb827ad72/648c07a794aaad449a56108c_Product-main-01-p-1080.jpg',
        imgAlt: 'Eau de Parfum',
        price: 50.30,
        category: categories[2]
    },
    {
        name: 'Anti-aging Serum', 
        description:'Step into the enchanting world of Chanel, where elegance and allure intertwine to create a captivating olfactory masterpiece. This exquisite fragrance is meticulously crafted to evoke emotions, leaving a lasting impression that lingers in the air. At its core, Chanel reveals a harmonious blend of carefully selected notes, each playing a vital role in the symphony of scents. The intoxicating floral bouquet of [describe floral notes] embraces the senses, drawing you deeper into its captivating allure.',
        img: 'https://assets.website-files.com/6489a11ade23496cb827ad72/648c24355ec7e188660d074a_Product-main-02.jpg',
        imgAlt: 'Eau de Parfum',
        price: 50.30,
        category: categories[4]
    },
  ]);

  console.log(products)
  
  process.exit();

})();
// const data = [    {name: 'Noodles', emoji: '🍜',  category: categories[2], price: 11.95},
// {name: 'Fried Rice', emoji: '🍘', category: categories[2], price: 9.95},
// {name: 'Jollof Rice', emoji: '🍛', category: categories[2], price: 9.95},
// {name: 'Veggy Brochette', emoji: '🍢', category: categories[8], price: 3.95},
// {name: 'Sushi', emoji: '🍣', category: categories[2], price: 5.95},
// {name: 'Beef', emoji: '🍖', category: categories[2], price: 9.95},
// {name: 'Croissant', emoji: '🥐', category: categories[0], price: 5.95},
// {name: 'Fried Egg', emoji: '🍳', category: categories[0], price: 5.95},
// {name: 'Doughnut', emoji: '🍩', category: categories[0], price: 5.95},
// {name: 'Turkey Sandwich', emoji: '🥪', category: categories[0], price: 6.95},
// {name: 'Hot Dog', emoji: '🌭', category: categories[2], price: 3.95},
// {name: 'Crab Plate', emoji: '🦀', category: categories[7], price: 14.95},
// {name: 'Soft drink', emoji:'🥤', category: categories[3], price: 2.95},
// {name: 'Fried Shrimp', emoji: '🍤', category: categories[7], price: 13.95},
// {name: 'Whole Lobster', emoji: '🦞', category: categories[7], price: 25.95},
// {name: 'Taco', emoji: '🌮', category: categories[5], price: 1.95},
// {name: 'Burrito', emoji: '🌯', category: categories[5], price: 4.95},
// {name: 'Pizza Slice', emoji: '🍕', category: categories[4], price: 3.95},
// {name: 'Spaghetti', emoji: '🍝', category: categories[4], price: 7.95},
// {name: 'Garlic Bread', emoji: '🍞', category: categories[4], price: 1.95},
// {name: 'French Fries', emoji: '🍟', category: categories[8], price: 2.95},
// {name: 'Popcorn', emoji: '🍿', category: categories[8], price: 2.95},
// {name: 'French Fries', emoji: '🥨', category: categories[2], price: 2.95},
// {name: 'Sweet Potato', emoji: '🍠', category: categories[8], price: 2.95},
// {name: 'Green Salad', emoji: '🥗', category: categories[4], price: 3.95},
// {name: 'Ice Cream', emoji: '🍨', category: categories[1], price: 1.95},
// {name: 'Cup Cake', emoji: '🧁', category: categories[1], price: 0.95},
// {name: 'Custard', emoji: '🍮', category: categories[1], price: 2.95},
// {name: 'Strawberry Shortcake', emoji: '🍰', category: categories[1], price: 3.95},
// {name: 'Stuffed Flatbread', emoji: '🥙', category: categories[5], price: 9.95},
// {name: 'Milk', emoji: '🥛', category: categories[3], price: 0.95},
// {name: 'Coffee', emoji: '☕', category: categories[3], price: 0.95},
// {name: 'Mai Tai', emoji: '🍹', category: categories[3], price: 8.95},
// {name: 'Beer', emoji: '🍺', category: categories[3], price: 3.95},
// {name: 'Wine', emoji: '🍷', category: categories[3], price: 7.95},
// {name: 'Fried Chicken', emoji: '🍗', category: categories[2], price: 9.95},
// {name: 'Pancakes', emoji: '🥞', category: categories[0], price: 7.95},
// {name: 'Bacon', emoji: '🥓', category: categories[0], price: 3.95},
// {name: 'Tea', emoji: '🍵', category: categories[3], price: 2.95}
// ]
databaseConnection()
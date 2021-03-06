var express = require('express');
var app = express();
app.use('/assets',express.static(__dirname + '/assets'));

// banner 
var getSlider = require('./Slider/getSlider');
var addSlider = require('./Slider/addSlider');
var EditSlider = require('./Slider/editSlider');
var deleteSlider = require('./Slider/deleteSlider');
app.use('/getSlider', getSlider)
app.use('/addSlider', addSlider)
app.use('/EditSlider', EditSlider)
app.use('/deleteSlider', deleteSlider)
// end

// category
var getCategory = require('./category/getCategory');
var addcategory = require('./category/addcategory');
var Editcategory = require('./category/Editcategory');
var deleteCategory = require('./category/deleteCategory');
app.use('/addcategory', addcategory)
app.use('/getCategory', getCategory)
app.use('/Editcategory', Editcategory)
app.use('/deleteCategory', deleteCategory)
// end

// Subcategory
var getSubCategory = require('./SubCategory/getSubCategory');
var addSubCategory = require('./SubCategory/addSubCategory');
var Editsubcategory = require('./SubCategory/Editsubcategory');
var deletesubCategory = require('./SubCategory/deletesubCategory');
var getAllSubCategory = require('./SubCategory/getAllSubCategory');
app.use('/getSubCategory', getSubCategory);
app.use('/addSubCategory', addSubCategory);
app.use('/Editsubcategory', Editsubcategory);
app.use('/deletesubCategory', deletesubCategory);
app.use('/getAllSubCategory', getAllSubCategory)

// end

// product
var getproduct = require('./product/getproduct');
var addproduct = require('./product/addproduct');
var deleteProduct = require('./product/deleteProduct');
var Editproduct = require('./product/Editproduct');
app.use('/getproduct', getproduct) 
app.use('/addproduct', addproduct)
app.use('/deleteProduct', deleteProduct)
app.use('/Editproduct', Editproduct)
// end

// auth
var SignIn = require('./Auth/SignIn');
app.use('/SignIn', SignIn)

var port = process.env.PORT || 800;
app.listen(port);
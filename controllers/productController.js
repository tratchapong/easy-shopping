const Product = require("../models/product")


exports.getAllProduct = async (req, res, next) => {
  try {
    const product = await Product.findAll()
    res.status(200).json({product})
  }
  catch(err) {
    next(err)   
  }
}

exports.createProduct = async (req, res, next) => {
  try {
    const {name, desc, price, quantity, supplier_id} = req.body
    const product = await Product.create({name, desc, price, quantity, supplier_id })
    res.status(200).json({product})
  }
  catch(err) {
    next(err)
  }
}


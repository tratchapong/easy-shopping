const db = require('../utils/db')

class Product {
  constructor(name , desc, price, quantity, supplier_id) {
    this.name = name
    this.desc = desc
    this.price = price
    this.quantity = quantity
    this.supplier_id = supplier_id
  }


  static findAll() {
    return db.execute('SELECT * FROM products').then( res => {
      console.log(res)
      return res[0]})
  }

  static create(product) {
    const {name, desc, price, quantity, supplier_id} = product
    return db
    .execute('INSERT INTO products (name, `desc`, price, quantity, supplier_id) VALUES (?, ?, ?, ?, ?)',[
      name, desc, price, quantity, supplier_id
    ])
    .then( ([res]) => {
      // console.log(res)
      return { id: res.insertId, ...product }
    })
  }

}

module.exports = Product

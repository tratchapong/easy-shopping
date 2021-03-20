// resource : https://github.com/earth824/cc8-exp-mysql-product

const express = require('express')
const productRoute = require('./routes/productRoute')
const app = express()


app.use(express.json())
app.use(express.urlencoded({extended : false}))

app.use('/products', productRoute)

app.get('/', (req, res, next) => (
  res.status(200).json({msg: 'OK get /'})
))

app.use( (req,res,next) => (res.status(404).json({msg : 'path not found!!!'}) ))
app.use( (err,req,res,next) => {
  console.log(err);
  res.stasus(500).json({msg: err.message})
})

const port = 8000
app.listen(port, ()=>console.log('server on port :', port))


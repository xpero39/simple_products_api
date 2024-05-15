require('module-alias/register')
require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const productRoutes = require('@routes/product.routes')

app.use('/api', productRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
 
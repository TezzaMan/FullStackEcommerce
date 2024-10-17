import express, {Router} from 'express';
//import router from './routes/products';
import productsRouter from './routes/products';

//const express = require('express') 
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//products endpoints, now in products/index.ts

app.use("/products", productsRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
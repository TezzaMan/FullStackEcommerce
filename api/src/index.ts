import express, {Router, json, urlencoded} from 'express';
//import router from './routes/products';
import productsRouter from './routes/products';

//const express = require('express') 
const port = 3000
const app = express()

app.use(urlencoded({ extended: false}))
app.use(json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//products endpoints, now in products/index.ts

app.use("/products", productsRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
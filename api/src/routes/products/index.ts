import { Router } from "express"
import { listProducts, getProductById, createProduct, updateProduct, deleteProduct } from "./productsController"

// products endpoints
const router = Router()

//router.get('/', (req, res) => {
//  res.send('The list of products')
//}) In the above, the 2nd parameter is a function, so we placed it in the productsController.ts
//file, and then imported it as listProducts above, we did the same for the other requests below
//Note that we remove the => when in productsController.ts
router.get('/', listProducts)
router.get('/:id', getProductById)
router.post('/', createProduct)
router.put('/:id', updateProduct)
router.delete('/:id', deleteProduct)

export default router

import { Request, Response } from "express"

export function listProducts(req: Request, res: Response) {
    res.send('The list of products')
}

export function getProductById(req: Request, res: Response) {
    res.send('Get the product by its id')
}

export function createProduct(req: Request, res: Response) {
    console.log(req.body)
    res.send('Create a product')
}

export function updateProduct(req: Request, res: Response) {
    res.send('Update a product')
}

export function deleteProduct(req: Request, res: Response) {
    res.send('Delete a product')
}
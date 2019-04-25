import { Controller, Get, Param, Put, Body, NotFoundError, Post, HttpCode } from 'routing-controllers'
import Product from './entity'

@Controller()
export default class MainController {

    @Get('/products')
    async allProducts() {
        const products = await Product.find()
        return { products }
    }

    @Get('/products/:id')
    getProducts(
        // this decorator retrieves the ID parameter from the url
        @Param('id') id: number
    ) {

        return Product.findOne(id)
    }

    @Put('/products/:id')
    async updateProduct(
        @Param('id') id: number,
        @Body() update: Partial<Product>
    ) {
        const product = await Product.findOne(id)
        if (!product) throw new NotFoundError('Cannot find product')

        return Product.merge(product, update).save()
    }

    @Post('/products')
    @HttpCode(201)
    createProduct(
        @Body() product: Product
    ) {
        return product.save()
    }

}
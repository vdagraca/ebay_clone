import { Controller, Get, Param } from 'routing-controllers'
import Product from './entity'

@Controller()
export default class MainController {

    @Get('/products')
    async allProducts() {
        const products = await Product.find()
        return { products }
    }

    @Get('/products/:id')
    getPage(
        // this decorator retrieves the ID parameter from the url
        @Param('id') id: number
    ) {

        return Product.findOne(id)
    }
}
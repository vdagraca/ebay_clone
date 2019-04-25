import { Controller, Get } from 'routing-controllers'
import Product from './entity'

@Controller()
export default class MainController {

    @Get('/products')
    async allProducts() {
        const products = await Product.find()
        return { products }
    }

}
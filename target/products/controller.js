"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const routing_controllers_1 = require("routing-controllers");
const entity_1 = require("./entity");
let MainController = class MainController {
    async allProducts() {
        const products = await entity_1.default.find();
        return { products };
    }
    getProducts(id) {
        return entity_1.default.findOne(id);
    }
    async updateProduct(id, update) {
        const product = await entity_1.default.findOne(id);
        if (!product)
            throw new routing_controllers_1.NotFoundError('Cannot find product');
        return entity_1.default.merge(product, update).save();
    }
};
__decorate([
    routing_controllers_1.Get('/products'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MainController.prototype, "allProducts", null);
__decorate([
    routing_controllers_1.Get('/products/:id'),
    __param(0, routing_controllers_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], MainController.prototype, "getProducts", null);
__decorate([
    routing_controllers_1.Put('/products/:id'),
    __param(0, routing_controllers_1.Param('id')),
    __param(1, routing_controllers_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], MainController.prototype, "updateProduct", null);
MainController = __decorate([
    routing_controllers_1.Controller()
], MainController);
exports.default = MainController;
//# sourceMappingURL=controller.js.map
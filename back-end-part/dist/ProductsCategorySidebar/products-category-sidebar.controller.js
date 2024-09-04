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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsCategorySidebarController = void 0;
const common_1 = require("@nestjs/common");
const products_category_sidebar_service_1 = require("./products-category-sidebar.service");
let ProductsCategorySidebarController = class ProductsCategorySidebarController {
    constructor(sidebarService) {
        this.sidebarService = sidebarService;
    }
    getSidebarData() {
        return this.sidebarService.getSidebarData();
    }
};
exports.ProductsCategorySidebarController = ProductsCategorySidebarController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProductsCategorySidebarController.prototype, "getSidebarData", null);
exports.ProductsCategorySidebarController = ProductsCategorySidebarController = __decorate([
    (0, common_1.Controller)('sidebar'),
    __metadata("design:paramtypes", [products_category_sidebar_service_1.ProductsCategorySidebarService])
], ProductsCategorySidebarController);
//# sourceMappingURL=products-category-sidebar.controller.js.map
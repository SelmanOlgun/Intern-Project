"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsCategorySidebarService = void 0;
const common_1 = require("@nestjs/common");
let ProductsCategorySidebarService = class ProductsCategorySidebarService {
    getSidebarData() {
        return [
            { title: 'Chairs', children: ['Dining chairs', 'Foldable chairs', 'Café chairs'] },
            { title: 'Café & bar chairs', children: ['Bar Stools', 'Café chairs'] },
            { title: 'Dining sets', children: [] },
            { title: 'Garden chairs', children: ['Garden chairs', 'Garden benches', 'Sun loungers & hammocks'] },
            { title: 'Stools & benches', children: [] },
            { title: 'Step stools', children: [] },
            { title: 'Junior chairs', children: [] },
            { title: 'High chairs', children: [] },
            { title: 'Armchairs', children: ['Fabric armchairs', 'Leather armchairs', 'Leather & coated fabric armchairs', 'Coated fabric armchairs', 'Rattan armchairs'] },
            { title: 'Office chairs', children: ['Swivel chairs', 'Visitor\'s chairs'] },
        ];
    }
};
exports.ProductsCategorySidebarService = ProductsCategorySidebarService;
exports.ProductsCategorySidebarService = ProductsCategorySidebarService = __decorate([
    (0, common_1.Injectable)()
], ProductsCategorySidebarService);
//# sourceMappingURL=products-category-sidebar.service.js.map
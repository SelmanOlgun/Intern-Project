import { ProductsCategorySidebarService } from './products-category-sidebar.service';
export declare class ProductsCategorySidebarController {
    private readonly sidebarService;
    constructor(sidebarService: ProductsCategorySidebarService);
    getSidebarData(): {
        title: string;
        children: string[];
    }[];
}

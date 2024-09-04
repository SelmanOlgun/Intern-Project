import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductService);
    getAllProducts(): import("./product.model").Product[];
    create(createProductDto: CreateProductDto): {
        message: string;
        product: CreateProductDto;
    };
}

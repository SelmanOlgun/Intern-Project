import { Product } from './product.model';
import { CreateProductDto } from './dto/create-product.dto';
export declare class ProductService {
    private products;
    getAllProducts(): Product[];
    create(createProductDto: CreateProductDto): {
        message: string;
        product: CreateProductDto;
    };
}

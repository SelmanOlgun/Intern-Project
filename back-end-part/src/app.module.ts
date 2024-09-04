/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ProductsCategorySidebarModule } from './ProductsCategorySidebar/products-category-sidebar.module';
import { ProductModule } from './ProductList/product.module';

@Module({
  imports: [ProductsCategorySidebarModule, ProductModule],
})
export class AppModule {}

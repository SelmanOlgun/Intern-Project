/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ProductsCategorySidebarService } from './products-category-sidebar.service';
import { ProductsCategorySidebarController } from './products-category-sidebar.controller';

@Module({
  controllers: [ProductsCategorySidebarController],
  providers: [ProductsCategorySidebarService],
})
export class ProductsCategorySidebarModule {}
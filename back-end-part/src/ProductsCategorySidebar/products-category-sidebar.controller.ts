/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { ProductsCategorySidebarService } from './products-category-sidebar.service';

@Controller('sidebar')
export class ProductsCategorySidebarController {
  constructor(
    private readonly sidebarService: ProductsCategorySidebarService,
  ) {}

  @Get()
  getSidebarData() {
    return this.sidebarService.getSidebarData();
  }
}

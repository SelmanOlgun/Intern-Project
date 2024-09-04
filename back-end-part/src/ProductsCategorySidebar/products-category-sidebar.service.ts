/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsCategorySidebarService {
  getSidebarData() {
    return [
      {
        title: 'Chairs',
        children: ['Dining chairs', 'Foldable chairs', 'Café chairs'],
      },
      { title: 'Café & bar chairs', children: ['Bar Stools', 'Café chairs'] },
      { title: 'Dining sets', children: [] },
      {
        title: 'Garden chairs',
        children: [
          'Garden chairs',
          'Garden benches',
          'Sun loungers & hammocks',
        ],
      },
      { title: 'Stools & benches', children: [] },
      { title: 'Step stools', children: [] },
      { title: 'Junior chairs', children: [] },
      { title: 'High chairs', children: [] },
      {
        title: 'Armchairs',
        children: [
          'Fabric armchairs',
          'Leather armchairs',
          'Leather & coated fabric armchairs',
          'Coated fabric armchairs',
          'Rattan armchairs',
        ],
      },
      {
        title: 'Office chairs',
        children: ['Swivel chairs', "Visitor's chairs"],
      },
    ];
  }
}

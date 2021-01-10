import { NgStyle } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SuperetteService {

  products: Array<any>;

  constructor() {

    this.products = [
      {
        'id': 1,
        'name': 'Playstation 5',
        'status': 'Stock epuisé',
      },
      {
        'id': 2,
        'name': 'Xbox Series X',
        'status': 'En stock',
      },
      {
        'id': 3,
        'name': 'RTX 3080Ti',
        'status': 'Stock epuisé',
      },
    ];
  }

  addAllInStock(newStatus: string) {
    this.products.forEach(products => products.status = newStatus);
  }

  addInStock(index:number, newStatus:string) {
    this.products[index].status = newStatus;
  }



}

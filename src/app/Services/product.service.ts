import { Injectable } from '@angular/core';
import { product } from './product';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}
  products: product[] = [
    {
      id: 1,
      name: 'Tuf Gaming',
      company: 'Asus',
      features: 'Fast gaming',
      price: 98000,
      image: '',
    },
    {
      id: 1,
      name: 'Tuf Gaming',
      company: 'Asus',
      features: 'Fast gaming',
      price: 98000,
      image: '',
    },
    {
      id: 1,
      name: 'Tuf Gaming',
      company: 'Asus',
      features: 'Fast gaming',
      price: 98000,
      image: '',
    },
  ];
  getProducts() {
    return of(this.products);
  }
  addProducts(newProduct: product) {
    this.products.push(newProduct);
  }
  deleteProduct(p: product) {
    let index = this.products.findIndex((item) => item.id == p.id);
    this.products.splice(index, 1);
  }
}

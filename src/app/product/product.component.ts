import { Component } from '@angular/core';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  constructor(private service: ProductService) {}
  products: any;
  ngOnInit() {
    this.service.getProducts().subscribe((res) => (this.products = res));
  }
}

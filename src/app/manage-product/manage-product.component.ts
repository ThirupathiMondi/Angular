import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { product } from '../Services/product';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrl: './manage-product.component.css',
})
export class ManageProductComponent {
  constructor(private route: Router, private prods: ProductService) {}
  products: any;
  ngOnInit() {
    if (localStorage.getItem('User') == null) this.route.navigateByUrl('/');
    this.prods.getProducts().subscribe((res) => (this.products = res));
  }
  delete(p: product) {
    this.prods.deleteProduct(p);
  }
}

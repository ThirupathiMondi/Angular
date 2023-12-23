import { Component } from '@angular/core';
import { product } from '../Services/product';
import { ProductService } from '../Services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.css',
})
export class AddproductComponent {
  constructor(private pro: ProductService, private route: Router) {}
  id: any;
  name: any;
  company: any;
  features: any;
  price: any;
  image: any;
  newProduct: product = new product();
  ngOnInit() {
    if (localStorage.getItem('User') == null) this.route.navigateByUrl('/');
  }
  addProduct() {
    this.newProduct = {
      id: this.id,
      name: this.name,
      company: this.company,
      features: this.features,
      price: this.price,
      image: this.image,
    };
    this.pro.addProducts(this.newProduct);
    this.route.navigateByUrl('dashboard/manageproducts');
  }
}

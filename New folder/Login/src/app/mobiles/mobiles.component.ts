import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css'],
})
export class MobilesComponent {
  constructor(private p: ProductsService) {}
  product: any;
  ngOnInit() {
    this.p.getProducts().subscribe((res) => (this.product = res));
  }
}

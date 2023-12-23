import { Injectable } from '@angular/core';
import { product } from './product';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor() {}

  products: product[] = [
    {
      id: 1,
      name: ' C51',
      company: 'OPPO',
      price: 9999,
      image:
        'https://image01.realme.net/general/20230608/1686196034266e84391de43944a599cdec535212ef4f6.png?width=1440&height=1440&size=710277',
    },
    {
      id: 2,
      name: 'Narzo 60x',
      company: 'OPPO',
      price: 12999,
      image:
        'https://akm-img-a-in.tosshub.com/indiatoday/images/device/1694411449Realme-c51-specs--800x800_one_to_one.jpg?VersionId=iAMw2G1GT_dhD3egB_sKcYvVwYBId2hs',
    },
    {
      id: 3,
      name: '11x 5G',
      company: 'OPPO',
      price: 15999,
      image:
        'https://akm-img-a-in.tosshub.com/indiatoday/images/device/1694411506Realme-11x-5g-specs-800x800_one_to_one.jpg?VersionId=iMxUcXoTpI9dxZ919h83OsQtxRXUQMBA',
    },
    {
      id: 4,
      name: '11 Pro+',
      company: 'OPPO',
      price: 27999,
      image:
        'https://akm-img-a-in.tosshub.com/indiatoday/images/device/1688631218Realme-11-Pro-specs-1-800x800_one_to_one.jpg?VersionId=NsFOdg.e9DLdi3hkYCuXtN2515DojsUp',
    },
  ];
  getProducts() {
    return of(this.products);
  }
}

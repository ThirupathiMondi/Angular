import { Component } from '@angular/core';

@Component({
  selector: 'app-laptops',
  templateUrl: './laptops.component.html',
  styleUrls: ['./laptops.component.css'],
})
export class LaptopsComponent {
  laptop = [
    {
      name: 'MSI',
      image:
        'https://m.media-amazon.com/images/I/41pYpjMAvaL._SY300_SX300_QL70_FMwebp_.jpg',
      model: 'Modern 5 5500U',
      price: 45000,
      available: 'Amazon',
      link: 'https://www.amazon.in/MSI-Modern-14-Ryzen-5500U/dp/B0BMKXWLL6/ref=sr_1_3?crid=YV15KFADTOTY&keywords=msi+modern+14+ryzen+5+5500u&qid=1700929672&sprefix=msi+modern+14+ryzen+55%2Caps%2C239&sr=8-3',
    },
    {
      name: 'Asus',
      image: 'https://m.media-amazon.com/images/I/71-Fx3Vfq5L._SX679_.jpg',
      model: 'Asus Tuf Gaming',
      price: 53489,
      available: 'Amazon',
      link: 'https://www.amazon.in/ASUS-TUF-Gaming-F15-FX506HF-HN024W/dp/B0C27TZ8CB/ref=sr_1_1_sspa?crid=1QPMJPK4KJ9HO&keywords=Asus+tuf+gaming&qid=1702791719&sprefix=asus+tuf+gaming%2Caps%2C221&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1',
    },
    {
      name: 'Acer',
      image:
        'https://m.media-amazon.com/images/I/31gZSptUk1L._SY300_SX300_QL70_FMwebp_.jpg',
      model: 'Nitro V',
      price: 78990,
      available: 'Amazon',
      link: 'https://www.amazon.in/Acer-i5-13420H-Graphics-Display-ANV15-51/dp/B0CHJJZ9G8/ref=sr_1_1_sspa?crid=3GQS01NSG8FIZ&keywords=acer%2Bnitro%2B5&qid=1702791882&sprefix=Acer%2Caps%2C234&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1',
    },
    {
      name: 'HP',
      image: 'https://m.media-amazon.com/images/I/71h9nOTd93L._SX679_.jpg',
      model: 'Victus',
      price: 71990,
      available: 'Amazon',
      link: 'https://www.amazon.in/HP-i5-12450H-15-6-inch-Response-fa0666TX/dp/B0C2HZYM87/ref=sr_1_2_sspa?crid=NCPG2FNOGBIK&keywords=HP+pavilion&qid=1702791960&sprefix=hp+pavilion%2Caps%2C220&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1',
    },
    {
      name: 'MSI',
      image:
        'https://m.media-amazon.com/images/I/41pYpjMAvaL._SY300_SX300_QL70_FMwebp_.jpg',
      model: 'Modern 5 5500U',
      price: 45000,
      available: 'Amazon',
      link: 'https://www.amazon.in/MSI-Modern-14-Ryzen-5500U/dp/B0BMKXWLL6/ref=sr_1_3?crid=YV15KFADTOTY&keywords=msi+modern+14+ryzen+5+5500u&qid=1700929672&sprefix=msi+modern+14+ryzen+55%2Caps%2C239&sr=8-3',
    },
    {
      name: 'Asus',
      image: 'https://m.media-amazon.com/images/I/71-Fx3Vfq5L._SX679_.jpg',
      model: 'Asus Tuf Gaming',
      price: 53489,
      available: 'Amazon',
      link: 'https://www.amazon.in/ASUS-TUF-Gaming-F15-FX506HF-HN024W/dp/B0C27TZ8CB/ref=sr_1_1_sspa?crid=1QPMJPK4KJ9HO&keywords=Asus+tuf+gaming&qid=1702791719&sprefix=asus+tuf+gaming%2Caps%2C221&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1',
    },
    {
      name: 'Acer',
      image:
        'https://m.media-amazon.com/images/I/31gZSptUk1L._SY300_SX300_QL70_FMwebp_.jpg',
      model: 'Nitro V',
      price: 78990,
      available: 'Amazon',
      link: 'https://www.amazon.in/Acer-i5-13420H-Graphics-Display-ANV15-51/dp/B0CHJJZ9G8/ref=sr_1_1_sspa?crid=3GQS01NSG8FIZ&keywords=acer%2Bnitro%2B5&qid=1702791882&sprefix=Acer%2Caps%2C234&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1',
    },
    {
      name: 'HP',
      image: 'https://m.media-amazon.com/images/I/71h9nOTd93L._SX679_.jpg',
      model: 'Victus',
      price: 71990,
      available: 'Amazon',
      link: 'https://www.amazon.in/HP-i5-12450H-15-6-inch-Response-fa0666TX/dp/B0C2HZYM87/ref=sr_1_2_sspa?crid=NCPG2FNOGBIK&keywords=HP+pavilion&qid=1702791960&sprefix=hp+pavilion%2Caps%2C220&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1',
    },
  ];
}

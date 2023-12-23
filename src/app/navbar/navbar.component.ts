import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  constructor(private route: Router) {}
  logout() {
    this.route.navigateByUrl('/');
    localStorage.removeItem('User');
  }
}

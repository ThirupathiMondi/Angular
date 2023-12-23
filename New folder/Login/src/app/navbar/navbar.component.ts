import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  user: any;
  uname: any;
  constructor(private a: Router) {}
  ngOnInit() {
    if (localStorage.getItem('user') == null) {
      this.a.navigateByUrl('/');
    } else {
      this.user = localStorage.getItem('user');
      this.user = JSON.parse(this.user);
      this.user = this.user.username;
    }
  }
  logout() {
    localStorage.removeItem('user');
    this.a.navigateByUrl('/');
  }
}

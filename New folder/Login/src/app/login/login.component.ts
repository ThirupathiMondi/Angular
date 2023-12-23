import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private a: Router) {}
  uname: any;
  pwd: any;
  user: any;
  logincheck() {
    if (this.uname == 'admin' && this.pwd == '12345') {
      this.a.navigateByUrl('nav/laptops');
      this.user = {
        username: this.uname,
        password: this.pwd,
      };
      localStorage.setItem('user', JSON.stringify(this.user));
    }
  }
}
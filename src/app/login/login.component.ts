import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private route: Router) {}
  username: any;
  password: any;
  login() {
    console.log('in login ts');
    if (this.username == 'admin' && this.password == '12345') {
      console.log('checking');
      this.route.navigateByUrl('/dashboard/home');
      console.log('navigated');
    } else if (this.username != null && this.password == '54321') {
      this.route.navigateByUrl('/nav/home');
    } else alert('Enter valid username/password');
    localStorage.setItem(
      'User',
      JSON.stringify({
        username: this.username,
        password: this.password,
      })
    );
  }
}

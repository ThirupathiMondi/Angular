import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  constructor(private route: Router) {}
  ngOnInit() {
    if (localStorage.getItem('User') == null) {
      this.route.navigateByUrl('/');
    }
  }
  logout() {
    localStorage.removeItem('User');
    this.route.navigateByUrl('/');
  }
}

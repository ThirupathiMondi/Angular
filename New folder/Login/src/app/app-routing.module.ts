import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MobilesComponent } from './mobiles/mobiles.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'nav',
    component: NavbarComponent,
    children: [{ path: 'mobiles', component: MobilesComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

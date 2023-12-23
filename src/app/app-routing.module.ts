import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ManageProductComponent } from './manage-product/manage-product.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'nav',
    component: NavbarComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'products', component: ProductComponent },
    ],
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'manageproducts', component: ManageProductComponent },
      { path: 'addproducts', component: AddproductComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

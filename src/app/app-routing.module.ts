import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './modules/products/list/list.component';
import { LandingPageComponent } from './modules/landing-page/landing-page.component';
import { RegisterComponent } from './modules/users/register/register.component';
import { ListCategoriesComponent } from './modules/categories/list-categories/list-categories.component';

const routes: Routes = [
  {path: '', component: ListComponent},
  {path: 'products', loadChildren: ()=> import("./modules/products/products.module").then(m => m.ProductsModule)},
  {path: 'register', loadChildren: ()=> import("./modules/users/users.module").then(m => m.UsersModule)},
  {path: 'login', loadChildren: ()=> import("./modules/users/users.module").then(m => m.UsersModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './modules/products/list/list.component';
import { LandingPageComponent } from './modules/landing-page/landing-page.component';

const routes: Routes = [
  {path: '', component: ListComponent},
  {path: 'products', loadChildren: ()=> import("./modules/products/products.module").then(m => m.ProductsModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { LandingPageComponent } from '../landing-page/landing-page.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'list', component: ListComponent},
  {path: 'product/:id', component: ViewProductComponent},
  {path: 'products/:category', component: ListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }

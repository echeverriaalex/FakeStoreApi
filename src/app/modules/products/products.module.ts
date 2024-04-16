import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ListComponent } from './list/list.component';
import { HttpClient } from '@angular/common/http';
import { ViewProductComponent } from './view-product/view-product.component';
import { RouterModule } from '@angular/router';
import { CategoriesModule } from '../categories/categories.module';


@NgModule({
  declarations: [
    ListComponent,
    ViewProductComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    RouterModule,
    CategoriesModule
  ]
})
export class ProductsModule { }

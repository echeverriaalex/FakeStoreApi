import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ListComponent } from './list/list.component';
import { HttpClient } from '@angular/common/http';
import { ViewProductComponent } from './view-product/view-product.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ListComponent,
    ViewProductComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    RouterModule
  ]
})
export class ProductsModule { }

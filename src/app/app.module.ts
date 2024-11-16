import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { LandingPageComponent } from './modules/landing-page/landing-page.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component'
import { CategoriesModule } from './modules/categories/categories.module';
import { ListProductsComponent } from './shared/list-products/list-products.component';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    //LandingPageComponent,
    //ListProductsComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    //CategoriesModule,
    RouterModule,
  ],
  exports:[

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

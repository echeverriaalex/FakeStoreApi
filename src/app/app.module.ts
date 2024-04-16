import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './modules/landing-page/landing-page.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component'
import { CategoriesModule } from './modules/categories/categories.module';
import { ListProductsComponent } from './shared/list-products/list-products.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavBarComponent,
    ListProductsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CategoriesModule
  ],
  exports:[

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

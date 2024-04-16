import { Component, OnInit } from '@angular/core';
import { ProductsFromApiService } from '../services/products-from-api.service';
import { ApiService } from 'src/app/core/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { __param } from 'tslib';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{

  productsList: Array<any> = [];

  constructor(private productService: ProductsFromApiService, 
              private route: ActivatedRoute,
              private router: Router,){}

  ngOnInit(): void {

    let category = this.route.snapshot.paramMap.get('category');

    if(category){
      this.listProductsByCategory(category);
    }
    else{
      this.listProducts()
    }
  }

  changeType(){

    let pass = document.getElementById('pass');
    pass?.getAttribute('type') == 'password'
      ? pass.setAttribute('type', 'text')
      : pass?.setAttribute('type', 'password')

    console.log('type now of pass --> ' + pass?.getAttribute('type'));
  }

  listProducts(){
    this.productService.getProductsList()
      .then((list) => {
        //console.log(list);        
        this.productsList = list
      })
      .catch((err)=>{
        console.log("error get list products" + err);
      })
  }

  listProductsByCategory(category: string){
    this.productService.getProductsCategory(category)
      .then((list) => {
        //console.log(list);        
        this.productsList = list
      })
      .catch((err)=>{
        console.log("error get list products" + err);
      })
    
  }

  viewProduct(idProduct: number){    
    this.router.navigate(['/products/product', idProduct]);
  }



  /*

    ngOnInit(): void {
    let idProduct = Number(this.route.snapshot.paramMap.get('id'));
    this.viewProduct(idProduct);
  }

  viewProduct(id: number){
    this.productService.getOneProduct(id)
      .then((productApi) => {     
        this.product = productApi
      })
      .catch((error) =>{
        console.log(`Dont exists product with id ${id}` + error);
      })
  }

  */
}

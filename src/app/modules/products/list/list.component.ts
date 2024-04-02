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
              private router: Router){}

  ngOnInit(): void {
    this.listProducts()
  }

  changeType(){

    let pass = document.getElementById('pass');
    pass?.getAttribute('type') == 'password'
      ? pass.setAttribute('type', 'text')
      : pass?.setAttribute('type', 'password')

    console.log('type now of pass --> ' + pass?.getAttribute('type'));
  }


  listProducts(){
    
    console.log("listando productos");
    /*
    this.api.getAllProducts()
    .subscribe({

      next: (list) => {
        console.log(list)        
      },
      error: (error) => {
        console.log("Error primse" + error)
      }
    })

    */
    this.productService.getProductsList()
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
}

import { Component, OnInit } from '@angular/core';
import { ProductsFromApiService } from '../services/products-from-api.service';
import { Product } from 'src/app/core/models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit{

  product!: Product
  // product: Product = new Product;

  constructor(private productService: ProductsFromApiService, private route: ActivatedRoute,){}

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

}
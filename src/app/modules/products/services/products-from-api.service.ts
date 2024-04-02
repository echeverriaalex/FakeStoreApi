import { Injectable } from '@angular/core';
import { Product } from 'src/app/core/models';
import { ApiService } from 'src/app/core/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsFromApiService {

  constructor(private api: ApiService) { }

  getProductsList(): Promise<any>{
    return new Promise<any>((resolve, reject)=>{
      this.api.getAllProducts().subscribe({
        next: (productList) => resolve(productList),
        error: (error) => {
          console.log("Error primse");
          reject(error)
        }
      })
    })
  }

  getOneProduct(id: number): Promise<Product>{
    return new Promise<Product>((resolve, reject)=>{
      this.api.getProduct(id).subscribe({
        next: (product) => resolve(product),
        error: (error) => {
          console.log("Error primse");
          reject(error)
        }
      })
    })
  }
}
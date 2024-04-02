import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { Product } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url: string = "https://fakestoreapi.com";

  constructor(private http: HttpClient) { }
  
  getAllProducts(): Observable<any>{
    return this.http.get<any>(`${this.url}/products`)
  }

  getProduct(id: number): Observable<Product>{
    return this.http.get<Product>(`${this.url}/products/${id}`)
  }
  
}

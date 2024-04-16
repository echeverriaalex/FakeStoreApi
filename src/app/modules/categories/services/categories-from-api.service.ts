import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriesFromApiService {

  constructor(private api: ApiService) { }

  getCategoriesList(): Promise<String[]>{
    return new Promise<String[]>((resolve, reject)=>{
      this.api.getAllCategories().subscribe({
        next: (categories) => resolve(categories),
        error: (error) => {
          console.log("Error primse");
          reject(error)
        }
      })
    })
  }
}

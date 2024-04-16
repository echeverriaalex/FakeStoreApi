import { Component, OnInit } from '@angular/core';
import { CategoriesFromApiService } from '../services/categories-from-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent implements OnInit{
  
  categoriesList: String[] = [];


  constructor(private categoriesService: CategoriesFromApiService,
              private router: Router){}

  ngOnInit(): void {
    this.getListCategories()
  }

  getListCategories(){
    this.categoriesService.getCategoriesList()
      .then((list) =>{
        this.categoriesList = list;
        //console.log(this.categoriesList);
        
      })
      .catch((error)=>{
        console.log("Error list categories");
        
      })
  }

  mostrar(cate: String){
    console.log("se clickeo ---> "  + cate);
    

  }

  listProductsOfcategory(category: any){    
    this.router.navigate(['/products/products', category]);
  }


}

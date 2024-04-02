export class Product{    
    id:number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating;

    constructor(product?:any){
        this.id = product.id != null? product.id : null;
        this.title = product.title != null? product.title : null;
        this.price = product.price != null? product.price : null;
        this.description = product.description != null? product.description : null;
        this.category = product.category != null? product.category : null;
        this.image = product.image != null? product.image : null;
        this.rating = product.rating != null? product.rating : null;
    }
}


export class Rating{
    rate: number
    count: number

    constructor(rating?: any){
        this.rate = rating.rate != null? rating.rate : null;
        this.count = rating.count != null? rating.count : null;
    }
}
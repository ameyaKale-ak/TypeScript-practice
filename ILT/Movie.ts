import { movieview } from "./movieview";

export class Movie{
    name:string;
    director:string;
    views:number;
    rating:number;
    language:string;

constructor(name:string,director:string,views:number,rating:number,language:string){
    this.name=name;
    this.director=director;
    this.views=views;
    this.rating=rating;
    this.language=language;
}

movieDetails(): void{      
    console.log (`Name:${this.name} 
Director:${this.director}
Views:${this.views}
Rating:${this.rating}
Language:${this.language}`)

}

}
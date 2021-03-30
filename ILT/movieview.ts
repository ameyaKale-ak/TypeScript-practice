import { Movie } from "./Movie";

export namespace movieview{

    export function movieByLanguage(m :Movie[],lang:string){
        let arr=[];
     for(let i=0;i<m.length;i++){
       if(m[i].language===lang)
        arr.push(m[i].name);
     }
        console.log(arr);
    }
    export function movieByRating(m :Movie[],rate:number){
        let arr=[];
     for(let i=0;i<m.length;i++){
       if(m[i].rating>rate)
        arr.push(m[i].name);
     }
        console.log(arr);
    }
}


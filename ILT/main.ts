import {Movie} from "./Movie";
import { movieview } from "./movieview";

let movObj=[];
let m1=new Movie('Your Name','Makoto Shinkai',300000,4.6,'Japanese');
let m2=new Movie('Spirited Away','Hayao Miyazaki',600000,4.7,'Japanese');
let m3=new Movie('Tenent','Christopher Nolan',500000,3.9,'English');
let m4=new Movie('John Wick','Chad Stahelski',700000,4.1,'English');
let m5=new Movie('Dear Zindagi','Gauri Shinde',200000,4.2,'Hindi');
let m6=new Movie('Andhadhun','Sriram Raghavan',150000,3.8,'Hindi');
movObj.push(m1);
movObj.push(m2);
movObj.push(m3);
movObj.push(m4);
movObj.push(m5);
movObj.push(m6);
console.log(`----------------------`);
// m1.movieDetails();
// m2.movieDetails();
// m3.movieDetails();
movieview.movieByLanguage(movObj,'Japanese');
console.log(`----------------------`);
movieview.movieByRating(movObj,4);
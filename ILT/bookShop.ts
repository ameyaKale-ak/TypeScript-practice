class BookShop{
    title:string;
    author:string;
    price:number;
    count:number;
    finalprice:number;
    discount:number;

constructor(title:string,author:string,price:number,count:number,discount:number){
    this.title=title;
    this.author=author;
    this.price=price;
    this.count=count;
    this.discount=discount;
}

checkFinalPrice(): void{
let total=this.price*this.count;
let dis=total*(this.discount/100);
let f=this.finalprice=total-dis
console.log (`Final Price :${f}`);
}

showDetails(): void{      
console.log (`Title:${this.title} 
Author:${this.author}
Price:${this.price}`);
}

showCount(): number{      
    return this.count;
}

showDiscount(): number{      
    return this.discount;
}

}

let b=new BookShop('Attack on Titan','Hajime Isayama',1000,2,20);
b.showDetails();
console.log(`Count is ${b.showCount()}`);
console.log(`Discount is ${b.showDiscount()}%`);
b.checkFinalPrice();

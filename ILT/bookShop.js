var BookShop = /** @class */ (function () {
    function BookShop(title, author, price, count, discount) {
        this.title = title;
        this.author = author;
        this.price = price;
        this.count = count;
        this.discount = discount;
    }
    BookShop.prototype.checkFinalPrice = function () {
        var total = this.price * this.count;
        var dis = total * (this.discount / 100);
        var f = this.finalprice = total - dis;
        console.log("Final Price :" + f);
    };
    BookShop.prototype.showDetails = function () {
        console.log("Title:" + this.title + " \nAuthor:" + this.author + "\nPrice:" + this.price);
    };
    BookShop.prototype.showCount = function () {
        return this.count;
    };
    BookShop.prototype.showDiscount = function () {
        return this.discount;
    };
    return BookShop;
}());
var b = new BookShop('Attack on Titan', 'Hajime Isayama', 1000, 2, 20);
b.showDetails();
console.log("Count is " + b.showCount());
console.log("Discount is " + b.showDiscount() + "%");
b.checkFinalPrice();

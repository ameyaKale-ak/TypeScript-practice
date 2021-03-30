"use strict";
exports.__esModule = true;
exports.Movie = void 0;
var Movie = /** @class */ (function () {
    function Movie(name, director, views, rating, language) {
        this.name = name;
        this.director = director;
        this.views = views;
        this.rating = rating;
        this.language = language;
    }
    Movie.prototype.movieDetails = function () {
        console.log("Name:" + this.name + " \nDirector:" + this.director + "\nViews:" + this.views + "\nRating:" + this.rating + "\nLanguage:" + this.language);
    };
    return Movie;
}());
exports.Movie = Movie;

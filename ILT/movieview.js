"use strict";
exports.__esModule = true;
exports.movieview = void 0;
var movieview;
(function (movieview) {
    function movieByLanguage(m, lang) {
        var arr = [];
        for (var i = 0; i < m.length; i++) {
            if (m[i].language === lang)
                arr.push(m[i].name);
        }
        console.log(arr);
    }
    movieview.movieByLanguage = movieByLanguage;
    function movieByRating(m, rate) {
        var arr = [];
        for (var i = 0; i < m.length; i++) {
            if (m[i].rating > rate)
                arr.push(m[i].name);
        }
        console.log(arr);
    }
    movieview.movieByRating = movieByRating;
})(movieview = exports.movieview || (exports.movieview = {}));

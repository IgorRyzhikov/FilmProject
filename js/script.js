"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieBD = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const q1 = prompt("Один из последних просмотренных фильмов?", ""),
      q2 = +prompt("На сколько оцените его?", ""),
      q3 = prompt("Один из последних просмотренных фильмов?", ""),
      q4 = +prompt("На сколько оцените его?", "");

personalMovieBD.movies[q1] = q2;
personalMovieBD.movies[q3] = q4 ;

console.log(personalMovieBD);
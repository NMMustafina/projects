// "use strict";

// const category = 'toys';
// console.log(`https://someurl.com/${category}/5`);

// const okCancel = confirm("Ok or Cancel?");
// console.log(okCancel);


//Задание 012
// const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?","");


// const personalMovieDB = {
//     count:numberOfFilms,
//     movies:{},
//     actors:{},
//     genres:[],
//     privat:false
// };
// //console.log(personalMovieDB);

// const qw1 = prompt("Один из последних просмотренных фильмов?",""),
//  qw2 = prompt("На сколько оцените его?",""),
//  qw3 = prompt("Один из последних просмотренных фильмов?",""),
//  qw4 = prompt("На сколько оцените его?","");

// personalMovieDB.movies[qw1] = qw2;
// personalMovieDB.movies[qw3] = qw4;
// console.log(personalMovieDB);

//Урок 014
let num = 50;
// while (num <=55){
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

for (let i = 1; i < 10; i++){
    if (i === 6){
        //break;
        continue;    
    }
    console.log(i);
}
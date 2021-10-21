// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

const movies = require("./data");

function getAllDirectors(movies) {
  const newArray = movies.map(function(element) {
    return element.director;
  });
  return newArray;
}

getAllDirectors(movies);


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

// spielberg movies

function howManyMovies(movies) {
  const spielberg = movies.filter(function(el) {
    return el.director === 'Steven Spielberg';
  });
  return spielberg;
}
howManyMovies(movies);

// how many spielberg movies ??



// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(movies) {
  const avg = movies.reduce(function(acc, current) {
    return ((acc.score + current) / avg.length);
  });
  return avg.toFixed(2);
}
scoresAverage(movies);


// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(movies) {
  const dramas = movies.filter(function(item){
    return (item.genre === 'Drama');
  });
  let average = (dramas.score / dramas.length);
  return average;
}
dramaMoviesScore(movies);


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
  const orderedMovies = movies.sort(function (a, b) {
    if (a.year > b.year){
    return 1;
    }
    if (a.year < b.year){
    return -1;
    }
    return 0;
  });
    return orderedMovies;
}
orderByYear(movies);


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
  const titles = movies.sort(function(a, b){
    if (a.title > b.title) {
      return 1;
    }
    if (a.title < b.title) {
      return -1;
    }
    return 0;
  });
    return titles.slice(0,20);
}
orderAlphabetically(movies);



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes() {}


// BONUS - Iteration 8: Best yearly score average - Best yearly score average

function bestYearAvg() {}




// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}

// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  // array.map() method to iterate [] & create a new [] w/just the directors
  const ALL_DIRECTORS = array.map((movies) => movies.director);

  return ALL_DIRECTORS;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  // array.filter() method to create new array w/just films of a certain director
  const CERTAIN_DIRECTOR_FILMS = array.filter(
    (movies) => movies.director == director
  );

  return CERTAIN_DIRECTOR_FILMS;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  // 1st -> array films of a certain director
  const CERTAIN_DIRECTOR_FILMS = array.filter(
    (movies) => movies.director == director
  );
  // 2nd -> array.reduce() method to find the total of a director´s movies score
  const DIRECTOR_SCORE_AVG =
    CERTAIN_DIRECTOR_FILMS.reduce((total, next) => total + next.score, 0) /
    CERTAIN_DIRECTOR_FILMS.length;

  return DIRECTOR_SCORE_AVG;
}

// Exercise 4:  Alphabetic order by title
function orderAlphabetically(array) {
  // 1st -> spread operator to clone original array so it doesn´t mutate it if we change the new array
  const CLONE_MOVIE_ARRAY = [...array];
  // 2nd -> array.sort() method to classify movies titles from A to Z (aaa, aab, abb, abc, acb...)
  const MOVIES_BY_ABC_ORDER = CLONE_MOVIE_ARRAY.sort((movieA, movieB) =>
    // string.localeCompare() method returns a number indicating whether a reference string comes before, or after, or is the same as the given string in sort order.
    movieA.title.localeCompare(movieB.title)
  );
  // 3rd -> Create an array w/just the titles
  const MOVIES_TITLES = MOVIES_BY_ABC_ORDER.map((movies) => movies.title);
  // 4th -> array.slice() method to create a new array w/just the first 20 elements
  const INITIAL_20_TITLES_BY_ABC_ORDER = MOVIES_TITLES.slice(0, 20);

  return INITIAL_20_TITLES_BY_ABC_ORDER;
}
// Exercise 5: Order by year, ascending
function orderByYear() {}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear
  };
}

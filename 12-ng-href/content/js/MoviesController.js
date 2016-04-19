function MoviesController() {
  this.favorites = [{
    title: 'The Shawshank Redemption',
    year: '1994',
    imdb: 'tt0111161',
    img: 'M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_UX182_CR0,0,182,268_AL_.jpg'
  }, {
    title: 'Inception',
    year: '2010',
    imdb: 'tt1375666',
    img: 'M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg'
  },{
    title: 'The Matrix',
    year: '1999',
    imdb: 'tt0133093',
    img: 'M/MV5BMTkxNDYxOTA4M15BMl5BanBnXkFtZTgwNTk0NzQxMTE@._V1_UX182_CR0,0,182,268_AL_.jpg'
  }, {
    title: 'Saving Private Ryan',
    year: '1998',
    imdb: 'tt0120815',
    img: 'M/MV5BNjczODkxNTAxN15BMl5BanBnXkFtZTcwMTcwNjUxMw@@._V1_UY268_CR7,0,182,268_AL_.jpg'
  }];
}

angular
  .module('app')
  .controller('MoviesController', MoviesController);

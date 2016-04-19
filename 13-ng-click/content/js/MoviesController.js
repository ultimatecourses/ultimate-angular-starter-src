function MoviesController() {
  this.likesList = [];
  this.unlike = function (index) {
    this.likesList.splice(index, 1);
  };
  this.addToLikes = function (movie) {
    this.likesList.push(movie);
  };
  this.favorites = [{
    title: 'The Shawshank Redemption',
    year: '1994'
  }, {
    title: 'Inception',
    year: '2010'
  },{
    title: 'The Matrix',
    year: '1999'
  }, {
    title: 'Saving Private Ryan',
    year: '1998'
  }];
}

angular
  .module('app')
  .controller('MoviesController', MoviesController);

function MoviesController() {
  this.newTitle = '';
  this.newRelease = '';
  this.onChange = function () {
    console.log('Change!', this.newTitle);
  };
  this.addMovie = function () {
    this.favorites.unshift({
      title: this.newTitle,
      year: this.newRelease
    })
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

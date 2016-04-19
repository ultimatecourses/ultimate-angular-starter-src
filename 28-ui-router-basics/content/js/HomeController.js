function HomeController() {
  this.viewName = 'home view!';
}

angular
  .module('app')
  .controller('HomeController', HomeController);

function AboutController() {
  this.viewName = 'about view!';
}

angular
  .module('app')
  .controller('AboutController', AboutController);

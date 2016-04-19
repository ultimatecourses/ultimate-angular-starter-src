function MainController(a, b) {
  a.name = 'Todd';
}

angular
  .module('app')
  .controller('MainController', [
    '$scope',
    '$rootScope',
    MainController
  ]);

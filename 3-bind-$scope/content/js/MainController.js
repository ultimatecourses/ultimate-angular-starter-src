function MainController($scope) {
  $scope.name = 'Todd';
}

angular
  .module('app')
  .controller('MainController', MainController);

function UserController($http) {
  var ctrl = this;
  var API = '//jsonplaceholder.typicode.com/users/';
  this.userId = '';
  this.chosenUser = {};
  this.getUser = function () {
    if (!this.userId) {
      return;
    }
    $http
      .get(API + this.userId)
      .then(function (response) {
        ctrl.chosenUser = response.data;
      }, function (reason) {
        // error
      })
  };
}

angular
  .module('app')
  .controller('UserController', UserController);

function UserService($http) {
  var API = '//jsonplaceholder.typicode.com/users/';
  function getUser(userId) {
    return $http
      .get(API + userId)
      .then(function (response) {
        return response.data;
      }, function (reason) {
        // error
      })
  }
  function getAllUsers() {

  }

  return {
    getUser: getUser,
    getAllUsers: getAllUsers
  };

}

angular
  .module('app')
  .factory('UserService', UserService);

function MainController() {
  this.person = {
    name: 'Todd Motto',
    location: 'England, UK'
  };
}

angular
  .module('app')
  .controller('MainController', MainController);

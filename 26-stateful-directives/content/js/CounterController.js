function CounterController() {
  this.increment = function () {
    this.count++;
  }
  this.decrement = function() {
    this.count--;
  }
}

angular
  .module('app')
  .controller('CounterController', CounterController);

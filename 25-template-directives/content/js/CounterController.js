function CounterController() {
  this.count = 1;
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

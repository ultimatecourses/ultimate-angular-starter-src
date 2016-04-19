function OrderController() {
  this.orderName = 'Coca-cola';
  this.orderQuantity = 5;
}

angular
  .module('app')
  .controller('OrderController', OrderController);

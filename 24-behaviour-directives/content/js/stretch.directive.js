function stretch() {
  return {
    restrict: 'A',
    link: function ($scope, $element, $attrs) {
      var element = $element[0];
      element.addEventListener('focus', function () {
        this.style.width = 250;
      });
      element.addEventListener('blur', function () {
        this.style.width = 120;
      });
    }
  };
}

angular
  .module('app')
  .directive('stretch', stretch);

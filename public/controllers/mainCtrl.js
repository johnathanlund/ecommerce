angular.module("eCommerce").controller("mainCtrl", function($scope, mainService) {
  $scope.products = {};
  $scope.getProducts = function () {
    teethService.getProducts().then(function(response){
      $scope.products = response;
    });
  };
  $scope.getProducts();

  $scope.postProducts = function (name, description, price) {
    var obj = {name: name, description: description, price: price};
    console.log(obj);
    teethService.postProducts(obj).then(function(response){
      $scope.products = response;
    });
  };
  $scope.changeProducts = function (product) {
    teethService.changeProducts(product).then(function(response){
      $scope.products = response;
    });
  };
  $scope.deleteProducts = function (product) {
    teethService.deleteProducts(product._id).then(function(response){
      $scope.products = response;
    });
  };
});

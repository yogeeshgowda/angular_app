var app = angular.module("myShoppingList", []); 
app.controller("myCtrl", function($scope,$interval) {
    $scope.teammates = ["yogeesh", "sathish", "anusha","divyasingh","divyapothu"];
   $scope.theTime = new Date().toLocaleTimeString();
  $interval(function () {
      $scope.theTime = new Date().toLocaleTimeString();
  }, 1000);
});
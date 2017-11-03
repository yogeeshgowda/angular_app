var app = angular.module("myShoppingList", []); 
app.controller("myCtrl", function($scope,$interval,$http) {
    $scope.teammates = ["yogeesh", "sathish", "anusha","divyasingh","divyapothu"];
   $scope.theTime = new Date().toLocaleTimeString();
  $interval(function () {
      $scope.theTime = new Date().toLocaleTimeString();
  }, 1000);
  $scope.add = function(){
  	     if ($scope.name != '' && angular.isDefined($scope.name))
  	     {
  	     	 // ADD A NEW ELEMENT.
                    $scope.teammates.push($scope.name);

                    // CLEAR THE FIELDS.
                    $scope.name = '';
  	     	
  	     } 
  	     else
                {
                   alert('please enter the name');
                }
  }
  $scope.get = function(){
  	$http.get('http://rest-service.guides.spring.io/greeting').
        then(function(response) {
            $scope.greeting = response.data;
        });
    }
  
});	
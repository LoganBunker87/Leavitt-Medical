app.controller('mainCtrl', function($scope, mainService){
  $scope.getName = function(){
    $scope.name = mainService.getName();
  };
  $scope.getName();
  console.log($scope.name);
});

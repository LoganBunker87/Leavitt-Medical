app.controller('ChildrenCtrl', function($scope, mainService){
  console.log(mainService.test)
  $scope.name = "Eric is better than Erik."

  $scope.saveData = function(){
    console.log($scope.patient)
    mainService.saveData($scope.patient)
      .then(function(dataFromService){
      // $scope.---- = dataFromService;
      console.log(dataFromService);
    })
  }
  
});

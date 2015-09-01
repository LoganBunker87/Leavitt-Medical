app.controller('mainCtrl', function($scope, mainService) {
  // $scope.getName = function(){
  //   $scope.name = mainService.getName();
  // };
  // $scope.getName();

  console.log('hacker erik is a lamebot');


  $scope.saveData = function(){
    console.log($scope.patient)
    mainService.saveData($scope.patient)
      .then(function(dataFromService){
      // $scope.---- = dataFromService;
      console.log(dataFromService);
    })
  }

  // $scope.saveData();

});

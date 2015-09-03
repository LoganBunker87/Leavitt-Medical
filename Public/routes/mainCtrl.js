app.controller('mainCtrl', function($scope, mainService) {

  $scope.patient;

  mainService.getUser("55e622161a14d7c939249c53")
    .then(function(response){
      $scope.patient = angular.copy(response);
      console.log($scope.patient)
      if(!$scope.patient.siblings) $scope.patient.siblings = [];
    })

  $scope.Cancers = [
    {type: 'Brain'},
    {type: 'Lymphoma'},
    {type: 'Breast'},
    {type: 'Skin'},
    {type: 'Colon'}
  ]

  $scope.addSibling = function(idx){
    $scope.patient.siblings.push({});
  }
  $scope.removeSibling = function(idx){
    $scope.patient.siblings.splice(idx, 1);
  }
  $scope.saveData = function(){
    console.log($scope.patient)
    mainService.saveData($scope.patient)
      .then(function(dataFromService){
      // $scope.---- = dataFromService;
      console.log(dataFromService);
    })
  }

});

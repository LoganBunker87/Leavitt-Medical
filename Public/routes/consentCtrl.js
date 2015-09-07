app.controller('consentCtrl', function($scope, mainService, $location){

  $scope.addPatient = function(){
    $location.path('/new-patient')
  }

});

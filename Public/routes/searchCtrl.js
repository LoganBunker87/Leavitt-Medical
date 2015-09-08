app.controller('searchCtrl', function($scope, mainService, $location, patients){

  // $scope.addSearch = function(){
  //   $location.path('/new-search')
  //
  // }
  console.log(patients.data);
  $scope.patients = patients.data
  // $scope.patientSearch = true
});

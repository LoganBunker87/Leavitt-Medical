app.controller('searchCtrl', function($scope, mainService, $location, patients){
  $scope.gridOptions= {};
  // $scope.addSearch = function(){
  //   $location.path('/new-search')
  //
  // }
  console.log(patients.data);
  $scope.patients = patients.data
  console.log($scope.patients);
  $scope.showPatient = function(row){
    alert(row.entity.name);
    $location.path('/patient/' + row.entity.name)
  }
  // $scope.gridOptions;
  $scope.gridOptions.columnDefs = [
    {name: 'selectPatient', cellTemplate: '<md-button ng-click="grid.appScope.showPatient(row)">Select Patient</md-button>'},
    {name: 'name'},
    {name: 'age'},
    {name: 'sex'},
  ]
  // $scope.patientSearch = true
  $scope.gridOptions.data = [];
  for(var i = 0; i < patients.data.length; i++){
    // $scope.patients[i].personal.name = "<a>" + $scope.patients[i].personal.name + "</a>"
    $scope.gridOptions.data.push($scope.patients[i].personal)
  }
  // $scope.data = $scope.personalArray;
});

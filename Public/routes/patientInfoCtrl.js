app.controller('patientInfoCtrl', function($scope, patient){
  console.log("PATIENT: ", patient)
  $scope.currentPatient = patient;
})

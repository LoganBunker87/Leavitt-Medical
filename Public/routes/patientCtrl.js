app.controller('patientCtrl', function($scope, mainService) {

  $scope.patient = {
    siblings: [],
    relatives: [],
    child: [],
  }

  // if(!$scope.patient.siblings) $scope.patient.siblings = [];
  // if(!$scope.patient.child) $scope.patient.child = [];
  // if(!$scope.patient.relative) $scope.patient.relative = [];
  // if(!$scope.patient.parent) $scope.patient.parent = [];


  $scope.getUser = function() {
    mainService.getUser()
      .then(function(response){
        $scope.patient = angular.copy(response);
        console.log($scope.patient)
        if(!$scope.patient.siblings) $scope.patient.siblings = [];
        if(!$scope.patient.child) $scope.patient.child = [];
        if(!$scope.patient.relative) $scope.patient.relative = [];
        if(!$scope.patient.parent) $scope.patient.parent = [];
      })
  }

  $scope.sex = [
    {type: 'Male'},
    {type: 'Female'},
  ]

  $scope.Cancers = [
    {type: ''},
    {type: 'Brain'},
    {type: 'Lymphoma'},
    {type: 'Breast'},
    {type: 'Skin'},
    {type: 'Colon'},
    {type: 'Prostate'},
    {type: 'Thyroid'},
    {type: 'other'}

  ]


///////////////Parents///////////////
  $scope.addParent = function(idx){
    $scope.patient.parent.push({});
  }
  $scope.removeParent = function(idx){
    $scope.patient.parent.splice(idx, 1);
  }



///////////////Siblings/////////////
  $scope.addSibling = function(idx){
    $scope.patient.siblings.push({});
  }
  $scope.removeSibling = function(idx){
    $scope.patient.siblings.splice(idx, 1);
  }


//////////////Child////////////
  $scope.addChild = function(idx){
    $scope.patient.child.push({});
  }
  $scope.removeChild = function(idx){
    $scope.patient.child.splice(idx, 1);
  }

///////////////Relatives////////////
  $scope.addRelative = function(idx){
    $scope.patient.relatives.push({});
  }
  $scope.removeRelative = function(idx){
    $scope.patient.relatives.splice(idx, 1);
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

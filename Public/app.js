var app = angular.module('LeavittMedical', ['ngRoute']);
  app.config(function($routeProvider){
    $routeProvider
      .when('/', {
        templateUrl: 'mainTmpl.html',
        controller: "mainCtrl"
      })
      .when('/Children', {
        templateUrl: '/routes/Children/ChildrenTmpl.html',
        controller: "ChildrenCtrl"
      })
      .when('/Father', {
        templateUrl: '/routes/Father/FatherTmpl.html',
        controller: "FatherCtrl"
      })
      .when('/Mother', {
        templateUrl: '/routes/Mother/MotherTmpl.html',
        controller: "MotherCtrl"
      })
      .when('/Siblings', {
        templateUrl: '/routes/Siblings/SiblingsTmpl.html',
        controller: "SiblingsCtrl"
      })
      .when('/Misc', {
        templateUrl: '/routes/Misc/MiscTmpl.html',
        controller: "MiscCtrl"
      })
      .otherwise({
        redirectTo: '/'
      })
  })

var app = angular.module('LeavittMedical', ['ngRoute', 'ngMaterial', 'ngAnimate']);
  app.config(function($routeProvider, $mdThemingProvider){

    $mdThemingProvider.theme('default')
        .primaryPalette('green', {
            'hue-1' : '300',
            'hue-2' : '200',
            'hue-3' : '50'
        })

        .accentPalette('orange', {
            'default' : '400',
            'hue-1'   : '300',
            'hue-2'   : '200',
            'hue-3'   : '50'
        })

        // .backgroundPalette('light-green', {
        //     'default' : '50',
        //     'hue-1'   : '300',
        //     'hue-2'   : '200',
        //     'hue-3'   : '50'
        // })



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

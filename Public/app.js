var app = angular.module('LeavittMedical', ['ngRoute', 'ngMaterial', 'ngAnimate']);
  app.config(function($routeProvider, $mdThemingProvider){

    $mdThemingProvider.theme('default')
          .primaryPalette('blue', {
            'hue-1' : '300',
            'hue-2' : '200',
            'hue-3' : '50'
        })

        .accentPalette('green', {
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
        templateUrl: '/routes/mainTmpl.html',
        controller: "mainCtrl",
        resolve: {
          patients: function(mainService){
            return mainService.getUsers();
          }
        }
      })

      .when ('/consent-form', {                       ///////////new consent-form//////////
        templateUrl: '/routes/consentTmpl.html',    ////////////////////////////////////
        controller: 'consentCtrl'                   ////////////////////////////////////
      })
      .when('/new-patient', {
        templateUrl: '/routes/patientTmpl.html',
        controller: "patientCtrl"
      })
      .when('/patient/:id', {
        template: "<div>patient information</div>" // templateUrl!!!!! refer above
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

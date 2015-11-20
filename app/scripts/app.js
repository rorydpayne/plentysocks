'use strict';

angular
  .module('plentysocksApp', [
    'plentysocksApp.controllers',
    'plentysocksApp.directives',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .when('/get-started', {
        templateUrl: 'views/get-started/index.html',
        controller: 'GetStartedCtrl'
      })
      .when('/plans', {
        templateUrl: 'views/plans/plans.html',
        controller: 'PlansCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })

  .run(['$rootScope', '$location', 
    function($rootScope, $location) {

      $rootScope.$on("$routeChangeStart", function(event, next, current) {
        $rootScope.currentPath = $location.path();
      });

      $rootScope.app = {

      };
    }]);

var controllersModule = angular.module('plentysocksApp.controllers', []);
var directivesModule = angular.module('plentysocksApp.directives', []);

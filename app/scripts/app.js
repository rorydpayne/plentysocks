'use strict';

/**
 * @ngdoc overview
 * @name plentysocksApp
 * @description
 * # plentysocksApp
 *
 * Main module of the application.
 */
angular
  .module('plentysocksApp', [
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
        controller: 'MainCtrl'
      })
      .when('/products', {
        templateUrl: 'views/products.html',
        controller: 'ProductsCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
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
    }]);

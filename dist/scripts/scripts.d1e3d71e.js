"use strict";angular.module("plentysocksApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider","$locationProvider",function(a,b){b.html5Mode(!0),a.when("/",{templateUrl:"views/home.html",controller:"HomeCtrl"}).when("/products",{templateUrl:"views/products.html",controller:"ProductsCtrl"}).when("/plans",{templateUrl:"views/plans.html",controller:"PlansCtrl"}).otherwise({redirectTo:"/"})}]).run(["$rootScope","$location",function(a,b){a.$on("$routeChangeStart",function(){a.currentPath=b.path()})}]),angular.module("plentysocksApp").controller("HomeCtrl",[function(){}]),angular.module("plentysocksApp").controller("ProductsCtrl",["$scope",function(a){a.products=[{id:1,name:"Product Name 1",imgUrl:"images/sock.jpg",sku:"in stock",details:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure optio, labore! Beatae commodi eaque deleniti, repudiandae itaque sint esse dolor tempora, iste eligendi harum, recusandae ratione aut assumenda animi corporis.",composition:"80% Combed Cotton, 17% Polyamide, 3% Elastane"},{id:2,name:"Product Name 2",imgUrl:"images/sock.jpg",sku:"in stock",details:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure optio, labore! Beatae commodi eaque deleniti, repudiandae itaque sint esse dolor tempora, iste eligendi harum, recusandae ratione aut assumenda animi corporis.",composition:"80% Combed Cotton, 17% Polyamide, 3% Elastane"},{id:3,name:"Product Name 3",imgUrl:"images/sock.jpg",sku:"in stock",details:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure optio, labore! Beatae commodi eaque deleniti, repudiandae itaque sint esse dolor tempora, iste eligendi harum, recusandae ratione aut assumenda animi corporis.",composition:"80% Combed Cotton, 17% Polyamide, 3% Elastane"},{id:4,name:"Product Name 4",imgUrl:"images/sock.jpg",sku:"in stock",details:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure optio, labore! Beatae commodi eaque deleniti, repudiandae itaque sint esse dolor tempora, iste eligendi harum, recusandae ratione aut assumenda animi corporis.",composition:"80% Combed Cotton, 17% Polyamide, 3% Elastane"}],a.activeProduct=a.products[0],a.activeProduct.quantity=1,a.setActive=function(b){a.activeProduct=b,a.activeProduct.quantity=1},a.subQuantity=function(){a.activeProduct.quantity>1&&a.activeProduct.quantity--},a.addQuantity=function(){a.activeProduct.quantity++}}]),angular.module("plentysocksApp").controller("PlansCtrl",[function(){}]),angular.module("plentysocksApp").controller("HeaderCtrl",["$scope",function(a){a.variable=""}]);
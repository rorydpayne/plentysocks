'use strict';

angular.module('plentysocksApp').controller('ProductsCtrl', ['$scope',
	function($scope) {
		$scope.products = [
			{
				name: "Product Name 1",
				imgUrl: "../images/sock.jpg",
				sku: "in stock",
				details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure optio, labore! Beatae commodi eaque deleniti, repudiandae itaque sint esse dolor tempora, iste eligendi harum, recusandae ratione aut assumenda animi corporis.",
				composition: "80% Combed Cotton, 17% Polyamide, 3% Elastane"
			},
			{
				name: "Product Name 2",
				imgUrl: "../images/sock.jpg",
				sku: "in stock",
				details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure optio, labore! Beatae commodi eaque deleniti, repudiandae itaque sint esse dolor tempora, iste eligendi harum, recusandae ratione aut assumenda animi corporis.",
				composition: "80% Combed Cotton, 17% Polyamide, 3% Elastane"
			},
			{
				name: "Product Name 3",
				imgUrl: "../images/sock.jpg",
				sku: "in stock",
				details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure optio, labore! Beatae commodi eaque deleniti, repudiandae itaque sint esse dolor tempora, iste eligendi harum, recusandae ratione aut assumenda animi corporis.",
				composition: "80% Combed Cotton, 17% Polyamide, 3% Elastane"
			},
			{
				name: "Product Name 4",
				imgUrl: "../images/sock.jpg",
				sku: "in stock",
				details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure optio, labore! Beatae commodi eaque deleniti, repudiandae itaque sint esse dolor tempora, iste eligendi harum, recusandae ratione aut assumenda animi corporis.",
				composition: "80% Combed Cotton, 17% Polyamide, 3% Elastane"
			},
		];

		$scope.activeProduct = $scope.products[0];
		$scope.activeProduct.quantity = 1;


}]);
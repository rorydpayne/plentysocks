'use strict';

angular.module('plentysocksApp').controller('ProductsCtrl', ['$scope',
	function($scope) {
		$scope.products = [
			{
				id: 1,
				name: "Product Name 1",
				imgUrl: "images/sock.jpg",
				sku: "in stock",
				details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure optio, labore! Beatae commodi eaque deleniti, repudiandae itaque sint esse dolor tempora, iste eligendi harum, recusandae ratione aut assumenda animi corporis.",
				composition: "80% Combed Cotton, 17% Polyamide, 3% Elastane"
			},
			{
				id: 2,
				name: "Product Name 2",
				imgUrl: "images/sock.jpg",
				sku: "in stock",
				details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure optio, labore! Beatae commodi eaque deleniti, repudiandae itaque sint esse dolor tempora, iste eligendi harum, recusandae ratione aut assumenda animi corporis.",
				composition: "80% Combed Cotton, 17% Polyamide, 3% Elastane"
			},
			{
				id: 3,
				name: "Product Name 3",
				imgUrl: "images/sock.jpg",
				sku: "in stock",
				details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure optio, labore! Beatae commodi eaque deleniti, repudiandae itaque sint esse dolor tempora, iste eligendi harum, recusandae ratione aut assumenda animi corporis.",
				composition: "80% Combed Cotton, 17% Polyamide, 3% Elastane"
			},
			{
				id: 4,
				name: "Product Name 4",
				imgUrl: "images/sock.jpg",
				sku: "in stock",
				details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure optio, labore! Beatae commodi eaque deleniti, repudiandae itaque sint esse dolor tempora, iste eligendi harum, recusandae ratione aut assumenda animi corporis.",
				composition: "80% Combed Cotton, 17% Polyamide, 3% Elastane"
			},
		];

		$scope.activeProduct = $scope.products[0];
		$scope.activeProduct.quantity = 1;

		$scope.setActive = function(product) {
			$scope.activeProduct = product;
			$scope.activeProduct.quantity = 1;
		};

		$scope.subQuantity = function() {
			if ($scope.activeProduct.quantity > 1) {
				$scope.activeProduct.quantity--;
			}
		};

		$scope.addQuantity = function() {
			$scope.activeProduct.quantity++;
		};


}]);
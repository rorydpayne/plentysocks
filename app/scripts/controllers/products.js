'use strict';

controllersModule.controller('GetStartedCtrl', ['$scope',
	function($scope) {
		$scope.products = [
			{
				id: 1,
				name: "All Blacks",
				imgUrl: "images/sock.jpg",
				sku: "in stock",
				details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure optio, labore! Beatae commodi eaque deleniti, repudiandae itaque sint esse dolor tempora, iste eligendi harum, recusandae ratione aut assumenda animi corporis.",
				composition: "80% Combed Cotton, 17% Polyamide, 3% Elastane"
			},
			{
				id: 2,
				name: "Greys & Blues",
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
			{
				id: 5,
				name: "Product Name 5",
				imgUrl: "images/sock.jpg",
				sku: "in stock",
				details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure optio, labore! Beatae commodi eaque deleniti, repudiandae itaque sint esse dolor tempora, iste eligendi harum, recusandae ratione aut assumenda animi corporis.",
				composition: "80% Combed Cotton, 17% Polyamide, 3% Elastane"
			},
			{
				id: 6,
				name: "Product Name 6",
				imgUrl: "images/sock.jpg",
				sku: "in stock",
				details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure optio, labore! Beatae commodi eaque deleniti, repudiandae itaque sint esse dolor tempora, iste eligendi harum, recusandae ratione aut assumenda animi corporis.",
				composition: "80% Combed Cotton, 17% Polyamide, 3% Elastane"
			},
			{
				id: 7,
				name: "Product Name 7",
				imgUrl: "images/sock.jpg",
				sku: "in stock",
				details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure optio, labore! Beatae commodi eaque deleniti, repudiandae itaque sint esse dolor tempora, iste eligendi harum, recusandae ratione aut assumenda animi corporis.",
				composition: "80% Combed Cotton, 17% Polyamide, 3% Elastane"
			},
			{
				id: 8,
				name: "Product Name 8",
				imgUrl: "images/sock.jpg",
				sku: "in stock",
				details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure optio, labore! Beatae commodi eaque deleniti, repudiandae itaque sint esse dolor tempora, iste eligendi harum, recusandae ratione aut assumenda animi corporis.",
				composition: "80% Combed Cotton, 17% Polyamide, 3% Elastane"
			}
		];

		$scope.activeProduct = $scope.products[0];
		$scope.activeProduct.quantity = 1;

		$scope.setActive = function(product) {
			$scope.activeProduct = product;
			$scope.activeProduct.quantity = 1;
		};

		$scope.showDetails = function(product) {
			$scope.setActive(product);
			product.detailedView = !product.detailedView;
		};

		$scope.closeDialog = function(product) {
			product.detailedView = !product.detailedView;
		}

		$scope.subQuantity = function() {
			if ($scope.activeProduct.quantity > 1) {
				$scope.activeProduct.quantity--;
			}
		};

		$scope.addQuantity = function() {
			$scope.activeProduct.quantity++;
		};


}]);
describe('ProductsCtrl tests', function() {

	beforeEach(module('plentysocksApp'));
	beforeEach(module('ngRoute'));

	var ctrl, scope;

	describe('ProductsCtrl with success', function() {

		// inject the $controller and $rootScope services
		beforeEach(inject(function($controller, $rootScope, $injector) {

			// create a new scope
			scope = $rootScope.$new();

			// create the controller
			ctrl = $controller('ProductsCtrl', {
				$scope: scope
			});
		}));

		it('Should construct as expected', function() {
			expect(ctrl).toBeDefined();
			expect(scope).toBeDefined();
		});

		it('Should set a new active product', function() {
			var product = {
				id: 1,
				name: "name",
				imgUrl: "../images/img.jpg",
				sku: "in stock",
				details: "Lorem ipsum dolor sit amet",
				composition: "Lorem ipsum dolor sit amet"
			}

			scope.setActive(product);

			expect(scope.setActive).toBeDefined();
			expect(scope.activeProduct).toBe(product);
		});

		it('Should add one to quantity of activeProduct', function() {
			scope.activeProduct.quantity = 1;
			scope.addQuantity();

			expect(scope.activeProduct.quantity).toBeDefined();
			expect(scope.activeProduct.quantity).toBe(2);
		});

		it('Should subtract one to quantity of activeProduct', function() {
			scope.activeProduct.quantity = 2;
			scope.subQuantity();

			expect(scope.activeProduct.quantity).toBeDefined();
			expect(scope.activeProduct.quantity).toBe(1);
		});
	});
});
'use strict';

directivesModule.directive('windowWidth', ['$rootScope', '$window',
    function($rootScope, $window) {
        return function(scope, element, attributes) {
            console.log('window width directive');
            var w = angular.element($window);

            scope.getWindowWidth = function() {
                return w.width();
            };

            scope.$watch(
                scope.getWindowWidth,
                function() {
                    if (scope.getWindowWidth() <= 450) {
                        $rootScope.app.isDesktop = false;
                        $rootScope.app.isTablet = false;
                        $rootScope.app.isMobile = true;
                    } else {
                        $rootScope.app.isMobile = false;
                        if (scope.getWindowWidth() <= 900) {
                            $rootScope.app.isDesktop = false;
                            $rootScope.app.isTablet = true;
                        } else {
                            $rootScope.app.isDesktop = true;
                            $rootScope.app.isTablet = false;
                        }
                    }
                    console.log("$rootScope.app.isDesktop: " + $rootScope.app.isDesktop);
                    console.log("$rootScope.app.isTablet: " + $rootScope.app.isTablet);
                    console.log("$rootScope.app.isMobile: " + $rootScope.app.isMobile);
                },
                true
            );

            w.bind('resize', function() {
                scope.$apply();
            });
        };
    }
]);
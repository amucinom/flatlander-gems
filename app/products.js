(function() {
	var app = angular.module('store-products', [])
	.directive('productTitle', function () {
		return {
			restrict: 'E',
			templateUrl: 'app/templates/product-title.html'
		};
	})
	.directive('productPanels', function() {
        return {
            restrict: 'E',
            templateUrl: 'app/templates/product-panels.html',
            controller: function() {
                this.tab = 1;

                this.selectTab = function(setTab) {
                    this.tab = setTab;
                };

                this.isSelected = function(checkTab) {
                    return this.tab === checkTab;
                };
            },
            controllerAs: 'panel'
        };
    });
})();

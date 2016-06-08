(function() {
    var app = angular.module('gemStore', ['store-products']);

    app.controller('StoreController',['$http', function($http) {
        var store = this;
        store.products = [];
        $http.get('/flatlander-gems/products.json')
            .success(function(data) {
                store.products = data;
                console.log(store.products);
            });
    }]);

    app.controller('ReviewController', function(){
    	this.review = {};
    	this.addReview = function (product) {
    		this.review.createdOn = Date.now();
    		product.reviews.push(this.review);
    		this.review = {};
    	};
    });



    var gems = [{
        name: 'Dodecahedron Gem',
        price: 2,
        description: 'This gem has 12 sides in total!',
        shine: 6,
        rarity: 10,
        color: '#FC615C',
        faces: 12,
        images: [
            'img/dodeca.png'
        ],
        reviews: [
	        {
	        	stars: 5,
	        	body: 'I love this product!',
	        	author: 'joe@thomas.com'
	        },
	        {
	        	stars: 1,
	        	body: 'This product sucks',
	        	author: 'tim@hater.com'
	        }
        ],
        canPurchase: true
    }, {
        name: 'Pentagonal Gem',
        price: 5.95,
        description: 'This is a pentagonal Gem',
        shine: 4,
        rarity: 3,
        color: '#F54236',
        faces: 5,
        images: [
            'img/penta.png'
        ],
        reviews: [
	        {
	        	stars: 5,
	        	body: 'I love this product!',
	        	author: 'joe@thomas.com'
	        },
	        {
	        	stars: 1,
	        	body: 'This product sucks',
	        	author: 'tim@hater.com'
	        }
        ],
        canPurchase: false
    }, {
        name: 'Azurite',
        description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
        shine: 8,
        price: 110.50,
        rarity: 7,
        color: '#CCC',
        faces: 14,
        images: [
            "images/gem-02.gif",
            "images/gem-05.gif",
            "images/gem-09.gif"
        ],
        reviews: [
	        {
	        	stars: 5,
	        	body: 'I love this product!',
	        	author: 'joe@thomas.com'
	        },
	        {
	        	stars: 1,
	        	body: 'This product sucks',
	        	author: 'tim@hater.com'
	        }
        ],
    }, {
        name: 'Bloodstone',
        description: "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
        shine: 9,
        price: 22.90,
        rarity: 6,
        color: '#EEE',
        faces: 12,
        images: [
            "images/gem-01.gif",
            "images/gem-03.gif",
            "images/gem-04.gif"
        ],
        reviews: [
	        {
	        	stars: 5,
	        	body: 'I love this product!',
	        	author: 'joe@thomas.com'
	        },
	        {
	        	stars: 1,
	        	body: 'This product sucks',
	        	author: 'tim@hater.com'
	        }
        ],
    }, {
        name: 'Zircon',
        description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
        shine: 70,
        price: 1100,
        rarity: 2,
        color: '#000',
        faces: 6,
        images: [
            "images/gem-06.gif",
            "images/gem-07.gif",
            "images/gem-10.gif"
        ],
        reviews: [
	        {
	        	stars: 5,
	        	body: 'I love this product!',
	        	author: 'joe@thomas.com'
	        },
	        {
	        	stars: 1,
	        	body: 'This product sucks',
	        	author: 'tim@hater.com'
	        }
        ],
    }];

})();

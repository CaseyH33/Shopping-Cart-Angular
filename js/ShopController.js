shopper.controller('ShopperCtrl', function ShopperCtrl($scope) {
    $scope.booze = [{
        name: "Pliny the Elder",
        image: "http://2.bp.blogspot.com/_B1gdAoYKcxw/S9dHFlmWJcI/AAAAAAAAAFI/1kICaP9GBvI/s1600/Russian+River+Pliny+the+Elder.JPG",
        price: 10.00
    }, {
        name: "Abyss",
        image: "https://beerblotter.files.wordpress.com/2010/10/abyss.png",
        price: 15.00
    }, {
        name: "World Wide Stout",
        image: "http://1.bp.blogspot.com/_e-YxtJRmw3s/SwVUuhGjJBI/AAAAAAAADaI/-JH6emfo_ZQ/s1600/dogfishhead-wwstout.jpg",
        price: 10.00
    }, {
        name: "Delirium Tremens",
        image: "http://static.webshopapp.com/shops/019852/files/016827327/800x1024x2/delirium-tremens-keg-5l.jpg",
        price: 35.00
    }]

    $scope.cart = [];
    $scope.shippingCost = 0;

    $scope.addToCart = function(item) {
        $scope.cart.push(item);

    }

    $scope.calculateTotal = function() {
        var cartTotal = 0;
        $scope.cart.forEach(function(cartItem) {
            cartTotal += cartItem.price;
        });
        if(cartTotal>=25) {
            cartTotal*=.9;
        }
        if(cartTotal >= 100) {
            $scope.shippingCost = 0;
        }
        return cartTotal + $scope.shippingCost;
    }

    $scope.deleteCartItem = function(item) {
        var index = $scope.cart.indexOf(item);
        $scope.cart.splice(index, 1);

    };

    $scope.calculateShipping = function(zipCode) {
        if(zipCode < 50000) {
            $scope.shippingCost = 20;
        } else {
            $scope.shippingCost = 10;
        }
    }



});









// studentRoster.controller('StudentsCtrl', function StudentsCtrl($scope) {
//     $scope.students = [];
//     $scope.grads = [];
//     $scope.addStudent = function() {
//         $scope.students.push({
//             name: $scope.studentName
//         });
//         $scope.studentName = null;
//     };
//
//     $scope.deleteStudent = function(student) {
//         var index = $scope.students.indexOf(student);
//         $scope.students.splice(index, 1);
//         console.log(index);
//     };
//
//     $scope.graduateStudent = function(student) {
//         $scope.grads.push(student);
//         $scope.deleteStudent(student);
//     };
//
// });

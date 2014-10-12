var demo = angular.module('demo', ['hSweetAlert']);

demo.controller('demoController', function($scope, sweet) {
    $scope.basic = function() {
        sweet.show('Simple right?');
    };
});
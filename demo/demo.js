var demo = angular.module('demo', ['hSweetAlert']);

demo.controller('demoController', function($scope, sweet, $interval) {

    $scope.theme = 'facebook';

    $scope.changeTheme = function(theme, $event) {
        $event.preventDefault();
        $event.stopPropagation();
        if (theme === $scope.theme) {
            return;
        }
        $scope.theme = theme;
        angular.forEach(angular.element(document).find('link'), function(link) {
            if (link.id) {
                angular.element(link).remove();
            }
        });
        if (theme !== 'default') {
            angular.element(document.head).append('<link id="theme" rel="stylesheet" type="text/css" href="libs/themes/' + theme + '/' + theme + '.css">');
        }
    };

    $interval(function() {
        $scope.isShown = sweet.isShown();
    }, 200);

    $scope.basic = function() {
        sweet.show('Simple right?');
    };

    $scope.title = function() {
        sweet.show('It\'s title', 'Can you see me?');
    };

    $scope.success = function() {
        sweet.show('Amazing', 'You\'ve done it', 'success');
    };

    $scope.fail = function() {
        sweet.show('Oops...', 'Can\'t believe it\'s you', 'error');
    };

    $scope.confirm = function() {
        sweet.show({
            title: 'Confirm',
            text: 'Delete this file?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#DD6B55',
            confirmButtonText: "Yes, delete it!",
            closeOnConfirm: false
        }, function() {
            sweet.show('Deleted!', 'The file has been deleted.', 'success');
        });
    };

    $scope.confirmCancel = function() {
        sweet.show({
            title: 'Confirm',
            text: 'Delete this file?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#DD6B55',
            confirmButtonText: "Yes, delete it!",
            closeOnConfirm: false,
            closeOnCancel: false
        }, function(isConfirm) {
            if (isConfirm) {
                sweet.show('Deleted!', 'The file has been deleted.', 'success');
            } else {
                sweet.show('Cancelled', 'Your imaginary file is safe :)', 'error');
            }
        });
    };

    $scope.html = function() {
        sweet.show({
            title: 'HTML <small>Title</small>!',
            text: 'A custom <span style="color:#F8BB86">html<span> message.',
            html: true
        });
    };

    $scope.custom = function() {
        sweet.show({
            title: 'Success',
            text: 'Congratulations!',
            imageUrl: 'img/cus_suc.png'
        });
    };

    $scope.close = function() {
        sweet.show({
            title: 'Auto close alert!',
            text: 'I will close in 2 seconds.',
            timer: 2000,
            showConfirmButton: false
        });
    };

    $scope.prompt = function() {
        sweet.show({
            title: 'An input!',
            text: 'Write something interesting:',
            type: 'input',
            showCancelButton: true,
            closeOnConfirm: false,
            animation: 'slide-from-top',
            inputPlaceholder: 'Write something'
        }, function(inputValue) {
            if (inputValue === false) {
                return false;
            }
            if (inputValue === '') {
                sweet.showInputError('You need to write something!');
                return false;
            }
            sweet.show('Nice!', 'You wrote: ' + inputValue, 'success');
        });
    };
});

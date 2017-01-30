# angular-sweetalert #
==================

![][bower-url]
[![NPM version][npm-image]][npm-url]
![][david-url]
![][dt-url]
![][license-url]

An angular service which expose [sweetAlert2](sweetalert2-url) functions in angular way.

## What's the difference between `2.x` and `1.x`? ##

Since [sweetAlert](https://github.com/t4t5/sweetalert) is unmaintained. I choose [sweetAlert2](https://github.com/limonte/sweetalert2) as new interface. See below:

[Reason of creating this fork is inactivity of original SweetAlert plugin](http://stackoverflow.com/a/27842854/1331425)

## Requirements ##

- [angular][angular-url]
- [sweetalert2][sweetalert2-url]

## Install ##

### from npm ###

```bash
npm install --save sweetalert2 angular-h-sweetalert
```

### from bower ###

```bash
bower install --save sweetalert2 angular-h-sweetalert
```

## Import ##

### ES2015 ###

```javascript
import 'sweetalert2/dist/sweetalert2.min.css';
import {ngSweetAlert2} from 'angular-h-sweetalert';
```

### CommonJS ###

```javascript
require('sweetalert2/dist/sweetalert2.min.css');
const {ngSweetAlert2} = require('angular-h-sweetalert');
```

### script ###

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>DEMO</title>
    <link rel="stylesheet" type="text/css" href="node_modules/sweetalert2/dist/sweetalert2.min.css">
</head>
<body>

    <script type="text/javascript" src="node_modules/angular/angular.min.js"></script>
    <script type="text/javascript" src="node_modules/sweetalert2/dist/sweetalert2.min.js"></script>
    <script type="text/javascript" src="node_modules/angular-h-sweetalert/dist/ngSweetAlert2.min.js"></script>
    <script type="text/javascript">
        var ngSweetAlert2 = window.ngSweetAlert2;
    </script>
</body>
</html>
```



## Basic Usage ##

```javascript
const demo = angular.module('demo', [ngSweetAlert2]);

demo.controller('demoController', ['$scope', 'swal', function($scope, swal) {
    
    $scope.basic = function() {
        swal(
            'The Internet?',
            'That thing is still around?',
            'question'
        );
    };

}]);
```

Looking for more usage examples?, check: [examples](https://leftstick.github.io/angular-sweetalert/)



## LICENSE ##

[GPL v3 License](https://raw.githubusercontent.com/leftstick/angular-sweetalert/master/LICENSE)

[angular-url]: https://angularjs.org/
[sweetalert2-url]: https://github.com/limonte/sweetalert2

[bower-url]: https://img.shields.io/bower/v/angular-h-sweetalert.svg
[npm-url]: https://npmjs.org/package/angular-h-sweetalert
[npm-image]: https://badge.fury.io/js/angular-h-sweetalert.png
[david-url]: https://david-dm.org/leftstick/angular-h-sweetalert.png
[dt-url]:https://img.shields.io/npm/dt/angular-h-sweetalert.svg
[license-url]:https://img.shields.io/npm/l/angular-h-sweetalert.svg

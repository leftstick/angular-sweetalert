/**
 * angular-h-sweetalert is a simple wrapper of sweetalert.
 *
 * @author Howard.Zuo
 * @date   Jan 30th, 2016
 *
 **/
(function(root, factory) {
    'use strict';

    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['angular', 'sweetalert'], function(angular, sweetalert) {
            return factory(angular, sweetalert);
        });
    } else if (typeof module === 'object' && module.exports) {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like enviroments that support module.exports,
        // like Node.
        module.exports = factory(require('angular'), require('sweetalert'));
    } else {
        // Browser globals
        factory(root.angular, root.sweetAlert);
    }
}(this, function(ng, sweet) {
    'use strict';

    var service = function() {

        this.show = function() {
            var args = [].slice.call(arguments, 0);
            sweet.apply(undefined, args);
        };

        ng.forEach(
            ['showInputError', 'close'],
            function(func) {
                this[func] = function() {
                    var args = [].slice.call(arguments, 0);
                    sweet[func].apply(undefined, args);
                };
            }, this);

        this.isShown = function() {
            var sweetAlertEl;

            ng.forEach(document.getElementsByClassName('sweet-alert'), function(el) {
                sweetAlertEl = ng.element(el);
            });

            return sweetAlertEl && sweetAlertEl.hasClass('visible');
        };
    };

    var modName = 'hSweetAlert';

    ng.module(modName, []).service('sweet', [service]);

    return modName;

}));

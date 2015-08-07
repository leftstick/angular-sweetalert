/**
 * angular-h-sweetalert is a simple wrapper of sweetalert.
 *
 * @author Howard.Zuo
 * @date   Aug 7th, 2015
 *
 **/
(function(angular, global) {
    'use strict';

    var definition = function(sweetAlert) {

        var service = function() {

            this.show = function() {
                var args = [].slice.call(arguments, 0);
                sweetAlert.apply(undefined, args);
            };

            angular.forEach(
                ['showInputError', 'close'],
                function(func) {
                    this[func] = function() {
                        var args = [].slice.call(arguments, 0);
                        sweetAlert[func].apply(undefined, args);
                    };
                }, this);

            this.isShown = function() {
                var sweetAlertEl;

                angular.forEach(document.getElementsByClassName('sweet-alert'), function(el) {
                    sweetAlertEl = angular.element(el);
                });

                return sweetAlertEl && sweetAlertEl.hasClass('visible');
            };
        };

        var modName = 'hSweetAlert';

        var mod = angular.module(modName, []);
        mod.service('sweet', [service]);

        return modName;
    };

    if (typeof exports === 'object') {
        module.exports = definition(require('sweetalert'));
    } else if (typeof define === 'function' && define.amd) {
        define(['sweetAlert'], definition);
    } else {
        definition(global.sweetAlert);
    }

}(angular, window));

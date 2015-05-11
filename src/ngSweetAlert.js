/**
 * angular-h-sweetalert is a simple wrapper of sweetalert.
 *
 * @author Howard.Zuo
 * @date   Mar 5th, 2015
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

            this.showInputError = function() {
                var args = [].slice.call(arguments, 0);
                sweetAlert.showInputError.apply(undefined, args);
            };

            this.isShown = function() {
                var sweetAlertEl;

                angular.forEach(document.getElementsByClassName('sweet-alert'), function(el) {
                    sweetAlertEl = angular.element(el);
                });

                return sweetAlertEl && sweetAlertEl.hasClass('visible');
            };
        };

        var mod = angular.module('hSweetAlert', []);
        mod.service('sweet', [service]);

    };

    if (typeof exports === 'object') {
        module.exports = definition(require('sweetAlert'));
    } else if (typeof define === 'function' && define.amd) {
        define(['sweetAlert'], definition);
    } else {
        definition(global.sweetAlert);
    }

}(angular, window));

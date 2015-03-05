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

            this.isShown = function() {
                var sweetAlertEl;
                angular.forEach(angular.element(document.body).find('div'), function(el) {
                    var $el = angular.element(el);
                    if ($el.hasClass('sweet-alert')) {
                        sweetAlertEl = $el;
                    }
                });
                if (!sweetAlertEl) {
                    return false;
                }
                return sweetAlertEl.hasClass('visible');
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

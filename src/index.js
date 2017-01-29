import angular from 'angular';

import {swalService} from './services/swal';

const moduleName = 'angular-sweetalert';
angular
    .module(moduleName, [])
    .factory('swal', swalService);

export const ngSweetAlert2 = moduleName;

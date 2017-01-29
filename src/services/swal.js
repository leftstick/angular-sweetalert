import swal from 'sweetalert2';
import {isPromise, isObject} from '../helper/object';

export function swalService($q) {
    'ngInject';
    return function(...args) {

        const opts = args.slice();

        if (isObject(opts[0]) && opts[0].preConfirm) {
            const oldPreConfirm = opts[0].preConfirm;
            opts[0].preConfirm = function() {
                return wrapNativePromise($q, oldPreConfirm(), 'preConfirm should return Promise');
            };
        }

        if (isObject(opts[0]) && opts[0].inputOptions) {
            const oldInputOptions = opts[0].inputOptions;
            opts[0].inputOptions = wrapNativePromise($q, oldInputOptions, 'inputOptions should be Promise or literal Object');
        }

        if (isObject(opts[0]) && opts[0].inputValidator) {
            const oldInputValidator = opts[0].inputValidator;
            opts[0].inputValidator = function() {
                return wrapNativePromise($q, oldInputValidator(), 'inputValidator should return Promise');
            };
        }


        const result = swal(...opts);
        if (!isPromise(result)) {
            return result;
        }

        return wrapNativePromise($q, result);
    };
}

function wrapNativePromise($q, pro, msg) {
    return $q((resolve, reject) => {
        if (!isPromise(pro)) {
            return reject(msg);
        }
        pro.then(resolve, reject);
    });
}

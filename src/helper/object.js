
export function isPromise(promise) {
    return !!promise && promise.then && promise.catch;
}

export function isObject(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]';
}

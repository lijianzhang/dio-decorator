/*
 * @Author: lijianzhang
 * @Date: 2017-12-31 18:13:10
 * @Last Modified by: lijianzhang
 * @Last Modified time: 2017-12-31 19:15:40
 */

import wrapDecorator from './wrapDecorator';

export function throttle(method, timeout = 100) {
    let last = 0;
    return function throttle(...args) {
        const now = Date.now();
        if (now - last > timeout) {
            method.call(this, ...args);
            last = now;
        }
    };
}

function throttleDescorator(target, key, descorator, timeout = 100) {
    const { value } = descorator;
    descorator.value = function initThrottle(...args) {
        const fn = throttle(value, timeout);
        const res = fn.call(this, ...args);
        Object.defineProperty(this, key, {
            ...descorator,
            value: fn,
        });
        return res;
    };
    return descorator;
}

export default wrapDecorator(throttleDescorator);

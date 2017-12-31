/*
 * @Author: lijianzhang
 * @Date: 2017-12-31 18:13:16
 * @Last Modified by: lijianzhang
 * @Last Modified time: 2017-12-31 19:16:31
 */

import wrapDecorator from './wrapDecorator';

export function debounce(method, timeout = 100) {
    let timer = null;
    return function debounce(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            method.call(this, ...args);
        }, timeout);
    };
}

function debounceDescorator(target, key, descorator, time = 100) {
    const { value } = descorator;
    descorator.value = function initDebounce(...args) {
        const fn = debounce(value, time);
        const res = fn.call(this, ...args);
        Object.defineProperty(this, key, {
            ...descorator,
            value: fn,
        });
        return res;
    };
    return descorator;
}

export default wrapDecorator(debounceDescorator);

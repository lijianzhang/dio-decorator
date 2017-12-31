/*
 * @Author: lijianzhang
 * @Date: 2017-12-31 18:12:57
 * @Last Modified by: lijianzhang
 * @Last Modified time: 2017-12-31 18:22:24
 */

export function isDescriptor(descorator) {
    if (!descorator || !descorator.hasOwnProperty) {
        return false;
    }

    const keys = ['value', 'initializer', 'get', 'set'];

    return keys.some(key => Reflect.hasOwnProperty(descorator, key));
}

export default targetDescorator => (...args) => {
    if (!isDescriptor(args[2])) {
        return (target, key, descorator) => targetDescorator(target, key, descorator, ...args);
    }
    return targetDescorator(...args);
};

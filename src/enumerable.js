/*
 * @Author: lijianzhang
 * @Date: 2017-12-31 18:16:06
 * @Last Modified by: lijianzhang
 * @Last Modified time: 2017-12-31 18:16:58
 */
import wrapDecorator from './wrapDecorator';

function enumerable(target, key, descriptor, enumerable = true) {
    descriptor.enumerable = enumerable;
    return descriptor;
}

export default wrapDecorator(enumerable);

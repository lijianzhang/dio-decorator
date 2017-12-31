/*
 * @Author: lijianzhang
 * @Date: 2017-12-31 18:13:36
 * @Last Modified by: lijianzhang
 * @Last Modified time: 2017-12-31 18:13:36
 */

import wrapDecorator from './wrapDecorator';

function loadingDescorator(target, key, descorator, name) {
    const { value } = descorator;
    descorator.value = async function loading(...args) {
        const loadingName = name || `${key}Loading`;
        try {
            this.setState({ [loadingName]: true });
            const res = await value.call(this, ...args);
            return res;
        } catch (error) {
            throw error;
        } finally {
            this.setState({ [loadingName]: false });
        }
    };
    return descorator;
}

export default wrapDecorator(loadingDescorator);

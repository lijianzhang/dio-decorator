/*
 * @Author: lijianzhang
 * @Date: 2017-12-31 18:45:08
 * @Last Modified by: lijianzhang
 * @Last Modified time: 2017-12-31 19:03:15
 */

import { Throttle } from '../src';

const defaultValue = {};

function delay(time, value, shouldThrow = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldThrow) reject(value);
            else resolve(value);
        }, time);
    });
}


class Editor {
    value = defaultValue;
    counter = 0;

    @Throttle(40)
    updateCounter(value) {
        this.value = value;
        this.counter += 1;
    }
}

describe('@Throttle', () => {
    let editor;

    beforeEach(() => {
        editor = new Editor();
    });


    it('invokes function only once', async () => {
        editor.updateCounter(1);
        expect(editor.counter).toBe(1);

        await delay(60);

        expect(editor.counter).toBe(1);
        expect(editor.value).toBe(1);
    });

    it('invokes function only twice', async () => {
        editor.updateCounter(1);
        editor.updateCounter(2);

        await delay(60);

        editor.updateCounter(3);
        editor.updateCounter(4);

        expect(editor.counter).toBe(2);
        expect(editor.value).toBe(3);
    });

    it('does not share timers and args between instances', async () => {
        const editor2 = new Editor();
        editor.updateCounter(1);
        editor2.updateCounter(2);

        expect(editor.counter).toBe(1);
        expect(editor2.counter).toBe(1);

        expect(editor.value).toBe(1);
        expect(editor2.value).toBe(2);

        await delay(60);

        expect(editor.counter).toBe(1);
        expect(editor2.counter).toBe(1);

        expect(editor.value).toBe(1);
        expect(editor2.value).toBe(2);
    });
});

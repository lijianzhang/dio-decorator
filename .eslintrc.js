module.exports = {
    "extends": "airbnb-base",
    parser: 'babel-eslint',
    rules: {
        'class-methods-use-this': 0,
        'max-len': [2, 120],
        'no-param-reassign': 0,
        'no-underscore-dangle': 0,
        indent: [2, 4, {
            SwitchCase: 0
        }],
        'import/no-dynamic-require': 0,
        'jsx-a11y/href-no-hash': 0,
        'react/jsx-filename-extension': [1, {
            extensions: ['.js', '.jsx']
        }],
        'import/no-extraneous-dependencies': ['error', {
            devDependencies: true
        }],
        'no-shadow': 0,
        camelcase: 0,
        'jsx-a11y/no-static-element-interactions': 0,
        'no-prototype-builtins': 0,
        'react/prop-types': 0,
        'react/no-danger': 0,
        'react/jsx-indent-props': [1, 4],
        'react/jsx-indent': [1, 4],
        'no-console': ['warn', {
            allow: ['warn', 'error']
        }],
    },
    env: {
        browser: true,
        'jest/globals': true,
    },
    plugins: ['jest'],
};
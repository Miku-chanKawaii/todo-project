module.exports = {
    env: {
        node: true,
        commonjs: true,
        es2022: true,
    },
    extends: 'eslint:recommended',
    rules: {
        'no-unused-vars': 'off',
        'vue/no-reserved-component-names': 'off',   
    },
    "parserOptions": {
        "sourceType": "module",
    }
};
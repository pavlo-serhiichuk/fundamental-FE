module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        jest: true
    },
    "extends": ["eslint:recommended", "plugin:react/recommended", "plugin:@typescript-eslint/recommended", "plugin:i18next/recommended", "plugin:storybook/recommended"],
    overrides: [{
        files: ['**/src/**/*.test.{ts, tsx}'],
        rules: {
            'i18next/no-literal-string': 'off'
        }
    }],
    globals: {
        __API__: true,
        __IS_DEV__: true,
        __PROJECT__: true,
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        'i18next',
        "react-hooks",
        "ulbi-tv-plugin"
    ],
    "rules": {
        "@typescript-eslint/ban-ts-comment": "off",
        'i18next/no-literal-string': ['error', {
            markupOnly: true
        }],
        "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
        "react-hooks/exhaustive-deps": "error",// Checks effect dependencies
        "no-undef": 'off',
        "arrow-body-style": "off",
        "ulbi-tv-plugin/path-checker": ['error', {alias: '@'}],
        // "ulbi-tv2-plugin/layer-imports": [
        //     'error',
        //     {
        //         alias: '@',
        //         ignoreImportsPatterns: ['**/StoreProvider']
        //     }
        // ],

    }
};
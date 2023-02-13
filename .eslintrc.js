module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        jest: true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:i18next/recommended"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        'i18next'
    ],
    "rules": {
        "@typescript-eslint/ban-ts-comment": "off",
        'i18next/no-literal-string': ['error', {markupOnly: true}]
    }
}
import js from "@eslint/js";

export default [
    js.configs.recommended,

    {
        "extends": [
            // ...
            "plugin:react-hooks/recommended"
        ],
        "plugins": [
            // ...
            "react-hooks"
        ],
        rules: {
            "no-unused-vars": "warn",
            "no-undef": "warn",
            "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": "warn"
        }
    }
];
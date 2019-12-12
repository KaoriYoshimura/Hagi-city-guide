module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:eslint-comments/recommended",
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "jsx-a11y",
        "import",
    ],
    "rules": {
        "@typescript-eslint/adjacent-overload-signatures": "error",
        "@typescript-eslint/ban-ts-ignore": "error",
        "@typescript-eslint/ban-types": "error",
        "camelcase": "off",
        "@typescript-eslint/camelcase": "error",
        "@typescript-eslint/class-name-casing": "error",
        "@typescript-eslint/consistent-type-assertions": "error",
        // "@typescript-eslint/explicit-function-return-type": "warn",
        // "@typescript-eslint/interface-name-prefix": "error",
        "@typescript-eslint/member-delimiter-style": "error",
        "no-array-constructor": "off",
        "@typescript-eslint/no-array-constructor": "error",
        "no-empty-function": "off",
        "@typescript-eslint/no-empty-function": "error",
        "@typescript-eslint/no-empty-interface": "error",
        // "@typescript-eslint/no-explicit-any": "warn",
        "@typescript-eslint/no-inferrable-types": "error",
        "@typescript-eslint/no-misused-new": "error",
        "@typescript-eslint/no-namespace": "error",
        "@typescript-eslint/no-non-null-assertion": "warn",
        "@typescript-eslint/no-this-alias": "error",
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": "warn",
        "no-use-before-define": "off",
        "@typescript-eslint/no-use-before-define": "error",
        "@typescript-eslint/no-var-requires": "error",
        "@typescript-eslint/prefer-namespace-keyword": "error",
        "@typescript-eslint/triple-slash-reference": "error",
        "@typescript-eslint/type-annotation-spacing": "error",
        "no-var": "error",
        "prefer-const": "error",
        "prefer-rest-params": "error",
        "prefer-spread": "error",
        "eslint-comments/no-duplicate-disable": "error",
        "eslint-comments/no-unlimited-disable": "error",
        // "eslint-comments/no-unsed-disable": "error",
        "eslint-comments/no-unused-enable": "error",
        "import/no-unresolved": 0,
        "import/no-named-as-default": 0,
        "import/no-cycle": 0,
        "import/first": 0,
        "import/no-extraneous-dependencies": 0,
        "jsx-a11y/label-has-for": 0,
        "jsx-a11y/control-has-associated-label": 0,
        "jsx-a11y/anchor-is-valid": 0,
        "jsx-a11y/click-events-have-key-events": 0,
        "jsx-a11y/no-static-element-interactions": 0,
        "jsx-a11y/mouse-events-have-key-events": 0,
        "jsx-a11y/media-has-caption": 0,
        "prefer-object-spread": 0,
        "prefer-destructuring": 0,
        "class-methods-use-this": 0,
        // "no-underscore-dangle": 0,
        "max-classes-per-file": 0,
        "react/destructuring-assignment": 0,
        "react/forbid-prop-types": 0,
        "react/prop-types": 0,
        "react/require-default-props": 0,
        "react/sort-comp": 0,
        "react/jsx-filename-extension": 0,
        "react/no-unused-prop-types": 0,
        "react/no-access-state-in-setstate": 0,
        "react/no-array-index-key": 0,
        "react/default-props-match-prop-types": 0,
        "react/no-danger": 0,
        "react/button-has-type": 0,
        "react/jsx-props-no-spreading": 0,
        "react/jsx-uses-react": "error",
        "react/state-in-constructor": 0,
        "react/static-property-placement": 0,
        "linebreak-style": 0,
        "unicode-bom": "off",
        "no-console": "off",
        "semi": ["error", "always"],
        "semi-spacing": ["error", { "after": true, "before": false }],
        "semi-style": ["error", "last"],
        "no-extra-semi": "error",
        "no-unexpected-multiline": "error",
        "no-unreachable": "error",
        "react/jsx-uses-vars": "error",

        "for-direction": "error",
        "getter-return": ["warn"],
        "no-await-in-loop": "warn",
        "no-compare-neg-zero": "error",
        "no-cond-assign": ["warn", "always"],
        "no-console": ["warn"],
        "no-constant-condition": "error",
        "no-control-regex": "error",
        "no-debugger": "error",
        "no-dupe-args": "error",
        "no-dupe-keys": "error",
        "no-duplicate-case": "error",
        "no-empty": ["error"],
        "no-empty-character-class": "error",
        "no-ex-assign": "error",
        "no-extra-boolean-cast": "error",
        "no-extra-parens": ["off"],
        "no-extra-semi": "error",
        "no-func-assign": "error",
        "no-inner-declarations": ["error", "both"],
        "no-invalid-regexp": ["error"],
        "no-irregular-whitespace": ["error"],
        "no-obj-calls": "error",
        "no-prototype-builtins": "error",
        "no-regex-spaces": "warn",
        "no-sparse-arrays": "error",
        "no-template-curly-in-string": "error",
        "no-unexpected-multiline": "error",
        "no-unreachable": "error",
        "no-unsafe-finally": "error",
        "no-unsafe-negation": "error",
        "use-isnan": "error",
        "valid-jsdoc": ["warn"],
        "valid-typeof": ["error"],

        // Best Practices
        "accessor-pairs": ["warn"],
        "array-callback-return": ["warn", { "allowImplicit": true }],
        "block-scoped-var": "warn",
        "class-methods-use-this": ["warn"],
        "complexity": ["warn", { "max": 20 }],
        "consistent-return": ["error"],
        "curly": ["error"],
        "default-case": ["error"],
        "dot-location": ["error", "property"],
        "dot-notation": ["error"],
        "eqeqeq": ["error", "smart"],
        "guard-for-in": "off",
        "no-alert": "warn",
        "no-caller": "error",
        "no-case-declarations": "warn",
        "no-div-regex": "error",
        "no-else-return": ["error", { "allowElseIf": false }],
        "no-empty-function": ["warn"],
        "no-empty-pattern": "error",
        "no-eq-null": "error",
        "no-eval": ["error"],
        "no-extend-native": ["error"],
        "no-extra-bind": "error",
        "no-extra-label": "error",
        "no-fallthrough": ["error", { "commentPattern": "break[\\s\\w]*omitted | no\\s?break" }],
        "no-floating-decimal": "error",
        "no-global-assign": ["error"],
        "no-implicit-coercion": ["off"],
        "no-implicit-globals": ["off"],
        "no-implied-eval": ["error"],
        // "no-invalid-this": "error",
        "no-iterator": "error",
        "no-labels": "error",
        "no-lone-blocks": "error",
        "no-loop-func": "error",
        // "no-magic-numbers": ["warn", { "ignoreArrayIndexes": true }],
        "no-multi-spaces": ["warn", {
            "exceptions":
            {
                "Property": true,
                "VariableDeclarator": true,
                "ImportDeclaration": true
            }
        }],
        "no-multi-str": "error",
        "no-new": "error",
        "no-new-func": "error",
        "no-new-wrappers": "error",
        "no-octal": "error",
        "no-octal-escape": "error",
        "no-param-reassign": ["warn"],
        "no-proto": "error",
        "no-redeclare": ["error"],
        "no-restricted-properties": "off",
        "no-return-assign": "error",
        "no-return-await": "warn",
        "no-script-url": "error",
        "no-self-assign": ["error"],
        "no-self-compare": "error",
        "no-sequences": ["warn"],
        "no-throw-literal": "error",
        "no-unmodified-loop-condition": "error",
        "no-unused-expressions": ["error"],
        "no-unused-labels": "error",
        "no-useless-call": "error",
        "no-useless-concat": "error",
        "no-useless-escape": "error",
        "no-useless-return": "error",
        "no-void": "error",
        "no-warning-comments": "warn",
        "no-with": "error",
        "prefer-promise-reject-errors": ["error", { "allowEmptyReject": true }],
        "radix": "error",
        "require-await": "warn",
        "vars-on-top": "warn",
        "wrap-iife": ["warn", "inside"],
        "yoda": ["error", "never", { "exceptRange": true }],

        // Strict Mode
        "strict": ["off"],

        // Variables
        "init-declarations": ["error"],
        "no-catch-shadow": "error",
        "no-delete-var": "error",
        "no-label-var": "error",
        "no-restricted-globals": ["warn"],
        "no-shadow": ["warn"],
        "no-shadow-restricted-names": "error",
        "no-undef": ["error"],
        "no-undef-init": "error",
        "no-undefined": "error",
        "no-unused-vars": ["error"],
        "no-use-before-define": ["error"],

        // Node.js and CommonJS
        "callback-return": ["error"],
        "global-require": "error",
        "handle-callback-err": ["warn"],
        "no-buffer-constructor": "warn",
        "no-mixed-requires": ["warn"],
        "no-new-require": "warn",
        "no-path-concat": "error",
        "no-process-env": "warn",
        "no-process-exit": "warn",
        "no-restricted-modules": ["warn"],
        "no-sync": ["warn"],

        // Stylistic Issues
        "array-bracket-newline": ["error", { "multiline": true }],
        "array-bracket-spacing": ["error", "never"],
        "array-element-newline": ["error", "consistent"], //needs
        "block-spacing": ["error", "always"],
        "brace-style": ["error", "1tbs", { "allowSingleLine": false }],
        "camelcase": ["warn", { "properties": "always" }],
        "capitalized-comments": ["error"], //Good!!
        "comma-dangle": ["error", "only-multiline", {
            "functions": "never",
            "imports": "never",
            "exports": "never"
        }],
        "comma-spacing": ["error", { "before": false, "after": true }],
        "comma-style": ["error", "last"],
        "computed-property-spacing": ["error", "never"],
        "consistent-this": ["warn"],
        "eol-last": ["error", "always"],
        "func-call-spacing": ["error", "never"],
        "func-name-matching": ["warn"],
        "func-names": ["off"],
        "func-style": ["error", "expression"],
        "function-paren-newline": ["error", "multiline"],
        "id-blacklist": ["warn"],
        "id-length": ["off"],
        "id-match": ["off"],
        "implicit-arrow-linebreak": ["error", "beside"],
        // "indent": ["error", 4],
        "jsx-quotes": ["error"],
        // "key-spacing": ["error", {
        //     "beforeColon": true,
        //     "afterColon": true,
        //     "mode": "minimum",
        //     "align": "colon"
        // }],
        "keyword-spacing": ["error"],
        "line-comment-position": ["off"],
        // "linebreak-style": ["error", "unix"],
        "lines-around-comment": ["off"],
        "lines-between-class-members": ["error", "always"],
        "max-depth": ["warn", { "max": 4 }],
        "max-len": ["off"],
        "max-lines": ["off"],
        "max-nested-callbacks": ["error"],
        "max-params": ["warn", { "max": 5 }],
        "max-statements": ["warn", { "max": 30 }, { "ignoreTopLevelFunctions": true }],
        "max-statements-per-line": ["warn", { "max": 2 }],
        "multiline-comment-style": ["warn", "starred-block"],
        "multiline-ternary": ["error", "always-multiline"],
        "new-cap": ["error"],
        "new-parens": ["error"],
        "newline-per-chained-call": ["error"],
        "no-array-constructor": ["error"],
        "no-bitwise": ["error"],
        "no-continue": "off",
        "no-inline-comments": "off",
        "no-lonely-if": "error",
        "no-mixed-operators": ["error"],
        "no-mixed-spaces-and-tabs": ["error"],
        "no-multi-assign": "error",
        "no-multiple-empty-lines": ["error"], //Good!
        "no-negated-condition": "error",
        "no-nested-ternary": "error",
        "no-new-object": "error",
        "no-plusplus": ["off"],
        "no-restricted-syntax": ["off"],
        "no-tabs": "error",
        "no-ternary": "off",
        "no-trailing-spaces": ["error"],
        // "no-underscore-dangle": ["error"],
        "no-unneeded-ternary": ["error"],
        "no-whitespace-before-property": "error",
        "nonblock-statement-body-position": ["off"],
        "object-curly-newline": ["error", { "consistent": true }],
        // "object-curly-spacing": ["error", "never"],
        "object-property-newline": ["error", { "allowAllPropertiesOnSameLine": true }],
        "one-var": ["off"],
        "one-var-declaration-per-line": ["off"],
        "operator-assignment": ["warn"],
        "operator-linebreak": ["error", "before"],
        "padded-blocks": ["error", "never"],
        "padding-line-between-statements": ["off"],
        "quote-props": ["error", "as-needed"],
        "quotes": ["error", "single", { "avoidEscape": true }],
        "require-jsdoc": ["warn"],
        // "semi": ["error", "never"],
        "semi-spacing": ["error", { "before": false, "after": false }],
        "semi-style": "error",
        "sort-keys": ["off"],
        "sort-vars": ["off"],
        "space-before-blocks": ["error", "always"],
        "space-before-function-paren": ["error", {
            "anonymous": "never",
            "named": "never",
            "asyncArrow": "always"
        }],
        "space-in-parens": ["error", "never"],
        "space-infix-ops": ["error"],
        "space-unary-ops": ["error", {
            "words": true,
            "nonwords": false
        }],
        "spaced-comment": ["error", "always"],
        "switch-colon-spacing": ["error"],
        "template-tag-spacing": ["error"],
        "unicode-bom": ["error", "never"],
        "wrap-regex": "off",

        // ECMAScript 6
        // "arrow-body-style": ["error", "as-needed"],
        "arrow-parens": ["error", "as-needed"],
        "arrow-spacing": ["error"],
        "constructor-super": "error",
        "generator-star-spacing": ["error", {
            "before": false,
            "after": true
        }],
        "no-class-assign": "error",
        "no-confusing-arrow": ["off"],
        "no-const-assign": "error",
        "no-dupe-class-members": "error",
        "no-duplicate-imports": ["error"],
        "no-new-symbol": "error",
        "no-restricted-imports": ["warn"],
        "no-this-before-super": "error",
        "no-useless-computed-key": "error",
        "no-useless-constructor": "error",
        "no-useless-rename": ["error"],
        "no-var": "error",
        "object-shorthand": ["error"],
        "prefer-arrow-callback": ["error"],
        "prefer-const": ["error"],
        "prefer-destructuring": ["warn"],
        "prefer-numeric-literals": ["off"],
        "prefer-rest-params": "error",
        "prefer-spread": "error",
        "prefer-template": "warn",
        "require-yield": "error",
        "rest-spread-spacing": ["error", "never"],
        "sort-imports": ["off"],
        "symbol-description": "error",
        "template-curly-spacing": ["error", "never"],
        "yield-star-spacing": ["error", {
            "before": false,
            "after": true
        }]
    }
};
module.exports = {
    'env': {
        'browser': true,
        'es6': true,
        'node': true,
    },
    'extends': [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
    ],
    'settings': { 'react': { 'version': 'detect' } },
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaVersion': 2018,
        'sourceType': 'module',
        'project': './tsconfig.json',
        'extraFileExtensions': ['.d.ts', 'tsx'],
        'ecmaFeatures': { 'jsx': true },
    },
    'plugins': [
        '@typescript-eslint',
        'modules-newline',
        'simple-import-sort',
        'import',
        'unused-imports',
        'react',
    ],
    'rules': {
        'brace-style': [
            'error',
            '1tbs',
            { 'allowSingleLine': false },
        ],
        'curly': [
            'error',
            'all',
        ],
        'indent': [
            'error',
            4,
        ],
        'linebreak-style': [
            'error',
            'unix',
        ],
        'quotes': [
            'error',
            'single',
        ],
        'semi': [
            'error',
            'always',
        ],
        'comma-dangle': [
            'error',
            'always-multiline',
        ],
        'eol-last': [
            'error',
            'always',
        ],
        'no-multiple-empty-lines': [
            'error',
            {
                'max': 1,
                'maxBOF': 0,
            },
        ],
        'no-tabs': 'error',
        'no-console': 1,
        'no-var': 2,
        'no-multi-spaces': 2,
        'no-irregular-whitespace': 2,
        'no-trailing-spaces': 2,
        'no-restricted-globals': [
            'error',
            {
                'name': 'fdescribe',
                'message': 'Avoid commiting fdescribe, use describe instead.',
            },
            {
                'name': 'fit',
                'message': 'Avoid commiting fit, use it instead.',
            },
        ],
        'space-before-blocks': ['error', 'always'],
        'spaced-comment': ['error', 'always', {
            'line': {
                'markers': ['/'],
                'exceptions': ['-', '+'],
            },
            'block': {
                'markers': ['!'],
                'exceptions': ['*'],
                'balanced': true,
            },
        }],
        'space-infix-ops': ['error', { 'int32Hint': false }],
        'object-property-newline': 'error',
        'key-spacing': [
            'error',
        ],
        'keyword-spacing': [
            'error',
        ],
        'space-in-parens': [
            'error',
            'never',
        ],
        'array-bracket-spacing': [
            'error',
            'always',
        ],
        'object-curly-spacing': [
            'error',
            'always',
        ],
        'object-curly-newline': ['error', {
            'ObjectExpression': {
                'multiline': true,
                'minProperties': 2,
            },
            'ObjectPattern': {
                'multiline': true,
                'minProperties': 2,
            },
            'ImportDeclaration': {
                'multiline': true,
                'minProperties': 2,
            },
            'ExportDeclaration': {
                'multiline': true,
                'minProperties': 2,
            },
        }],
        'no-unused-vars': 'off',
        'unused-imports/no-unused-imports': 'error',
        'no-else-return': ['error'],
        'eqeqeq': ['error', 'always', { 'null': 'never' }],
        '@typescript-eslint/no-unnecessary-type-arguments': 'error',
        '@typescript-eslint/no-unnecessary-qualifier': 'error',
        '@typescript-eslint/no-unnecessary-type-constraint': 'error',
        '@typescript-eslint/prefer-nullish-coalescing': 'error',
        '@typescript-eslint/prefer-optional-chain': 'error',
        '@typescript-eslint/switch-exhaustiveness-check': 'error',
        '@typescript-eslint/type-annotation-spacing': 'error',
        '@typescript-eslint/prefer-string-starts-ends-with': 'error',
        '@typescript-eslint/prefer-enum-initializers': 'error',
        '@typescript-eslint/explicit-member-accessibility': ['error',
            { overrides: { constructors: 'no-public' } },
        ],
        '@typescript-eslint/member-ordering': [
            'error',
            {
                'default': [
                    'public-static-field',
                    'public-static-method',
                    'protected-static-field',
                    'protected-static-method',
                    'private-static-field',
                    'private-static-method',
                    'public-instance-field',
                    'protected-instance-field',
                    'private-instance-field',
                    'public-constructor',
                    'protected-constructor',
                    'private-constructor',
                    'public-instance-method',
                    'protected-instance-method',
                    'private-instance-method',
                ],
            },
        ],
        '@typescript-eslint/member-delimiter-style': 'error',
        '@typescript-eslint/array-type': [
            'error',
            { default: 'array-simple' },
        ],
        'modules-newline/import-declaration-newline': 'error',
        'modules-newline/export-declaration-newline': 'error',
        'simple-import-sort/imports': 'error',
        'import/first': 'error',
        'import/newline-after-import': 'error',
        'import/no-duplicates': 'error',
        'comma-spacing': [
            'error',
            {
                'before': false,
                'after': true,
            },
        ],
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/self-closing-comp': 'error',
        'react/void-dom-elements-no-children': 'error',
        'react/jsx-props-no-multi-spaces': 'error',
        'react/jsx-child-element-spacing': 'error',
        'react/jsx-curly-brace-presence': 'error',
        'react/jsx-curly-newline': 'error',
        'react/jsx-curly-spacing': 'error',
        'react/jsx-equals-spacing': 'error',
        'react/jsx-first-prop-new-line': 'error',
        'react/jsx-fragments': 'error',
        'react/jsx-max-props-per-line': 'error',
        'react/jsx-one-expression-per-line': 'error',
        'react/jsx-pascal-case': 'error',
        'react/jsx-tag-spacing': 'error',
    },
};

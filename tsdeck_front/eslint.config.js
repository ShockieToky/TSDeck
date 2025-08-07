import eslint from '@eslint/js';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import sonarjs from 'eslint-plugin-sonarjs';
import tseslint from 'typescript-eslint';

export default (async function config() {
    const { default: stylistic } = await import('@stylistic/eslint-plugin');
    const { default: love } = await import('eslint-config-love');
    const { default: unicorn } = await import('eslint-plugin-unicorn');

    return tseslint.config(
        eslint.configs.recommended,
        tseslint.configs.recommendedTypeChecked,
        tseslint.configs.strictTypeChecked,
        tseslint.configs.stylisticTypeChecked,
        reactHooks.configs['recommended-latest'],
        reactRefresh.configs.vite,
        love,
        stylistic.configs.recommended,
        prettierRecommended,
        unicorn.configs.recommended,
        sonarjs.configs.recommended,
        {
            plugins: {
                '@typescript-eslint': tseslint.plugin,
            },
            settings: {
                'import/resolver': {
                    typescript: { alwaysTryTypes: true },
                    node: true,
                },
            },
            rules: {
                'class-methods-use-this': 'off',
                complexity: ['error', 20],
                'consistent-return': 'off',
                'eslint-comments/require-description': 'off',
                'func-names': 'off',
                'max-len': ['error', { code: 140, ignoreTemplateLiterals: true, ignoreUrls: true }],
                'newline-per-chained-call': 'off',
                'no-await-in-loop': 'off',
                'no-continue': 'off',
                'no-console': 'warn',
                'no-param-reassign': ['error', { props: false }],
                'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
                'no-underscore-dangle': ['error', { allow: ['_id'] }],
                'no-void': ['error', { allowAsStatement: true }],
                'object-curly-newline': 'off',
                'spaced-comment': ['error', 'always', { line: { markers: ['/', '#region', '#endregion'] } }],
                'import/no-default-export': 'warn',
                'import/order': [
                    'error',
                    {
                        groups: [
                            ['builtin', 'external'],
                            ['internal', 'parent', 'sibling', 'index'],
                        ],
                        'newlines-between': 'always',
                        alphabetize: { order: 'asc', caseInsensitive: true },
                    },
                ],
                'import/prefer-default-export': 'off',
                '@typescript-eslint/class-methods-use-this': 'off',
                '@typescript-eslint/consistent-type-assertions': ['error', { assertionStyle: 'as' }],
                '@typescript-eslint/init-declarations': ['error', 'never', { ignoreForLoopInit: true }],
                '@typescript-eslint/naming-convention': [
                    'error',
                    { selector: 'default', format: ['camelCase'] },
                    { selector: 'import', format: null },
                    { selector: 'variable', format: ['camelCase', 'PascalCase'] },
                    { selector: 'parameter', format: ['camelCase'], leadingUnderscore: 'allow' },
                    { selector: 'property', format: null },
                    { selector: 'typeProperty', format: null },
                    { selector: 'method', format: ['camelCase'] },
                    { selector: 'function', format: ['camelCase', 'PascalCase'] },
                    { selector: 'typeLike', format: ['PascalCase'] },
                    { selector: 'enumMember', format: ['UPPER_CASE'] },
                ],
                '@typescript-eslint/no-extraneous-class': 'off',
                '@typescript-eslint/no-magic-numbers': 'warn',
                '@typescript-eslint/no-unsafe-member-access': 'off',
                '@typescript-eslint/no-unsafe-type-assertion': 'off',
                '@typescript-eslint/restrict-template-expressions': [
                    'error',
                    { allowAny: true, allowBoolean: true, allowNullish: true, allowNumber: true, allowRegExp: true },
                ],
                '@typescript-eslint/prefer-destructuring': 'off',
                '@typescript-eslint/prefer-readonly': 'off',
                '@typescript-eslint/strict-boolean-expressions': 'off',
                '@stylistic/arrow-parens': ['error', 'always'],
                '@stylistic/brace-style': ['error', '1tbs'],
                '@stylistic/lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
                '@stylistic/no-extra-parens': ['error', 'functions'],
                '@stylistic/object-curly-spacing': ['error', 'always'],
                '@stylistic/semi': ['error', 'always'],
                '@stylistic/indent': 'off',
                '@stylistic/keyword-spacing': 'off',
                '@stylistic/member-delimiter-style': 'off',
                '@stylistic/operator-linebreak': 'off',
                'sonarjs/cognitive-complexity': ['error', 25],
                'sonarjs/no-commented-code': 'warn',
                'sonarjs/no-duplicate-string': 'warn',
                'sonarjs/no-nested-assignment': 'off',
                'unicorn/no-null': 'off',
                'unicorn/prevent-abbreviations': 'off',
                'unicorn/prefer-module': 'off',
                'unicorn/filename-case': 'off',
                'unicorn/prefer-ternary': ['error', 'only-single-line'],
                'unicorn/prefer-top-level-await': 'off',
            },
        },
    );
})();

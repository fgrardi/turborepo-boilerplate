import js from "@eslint/js";
import stylisticPlugin from "@stylistic/eslint-plugin";
import turboPlugin from "eslint-plugin-turbo";
import tseslint from "typescript-eslint";

/**
 * A shared ESLint configuration for the repository.
 *
 * @type {import("eslint").Linter.Config}
 * */
export const config = [
	js.configs.recommended,
	...tseslint.configs.recommended,
	{
		plugins: {
			turbo: turboPlugin,
		},
		rules: {
			"turbo/no-undeclared-env-vars": "warn",
			"no-console": "error",
		},
	},
	// This can be enabled for migration
	// {
	// 	plugins: {
	// 		onlyWarn,
	// 	},
	// },
	{
		ignores: ["dist/**", ".next/**"],
	},
	{
		files: ["**/*.{ts,tsx}"],
		plugins: {"@stylistic": stylisticPlugin},
		rules: {
			"@stylistic/array-bracket-newline": ["error", { multiline: true, minItems: 3 }],
			"@stylistic/array-element-newline": ["error", { multiline: true, minItems: 3 }],
			"@stylistic/arrow-parens": ["error", "always"],
			"@stylistic/implicit-arrow-linebreak": ["error", "beside"],
			"@stylistic/block-spacing": ["error", "always"],
			"@stylistic/comma-dangle": ["error", "always-multiline"],
			"@stylistic/comma-spacing": ["error", { before: false, after: true }],
			"@stylistic/function-call-spacing": ["error", "never"],
			"@stylistic/function-paren-newline": ["warn", { minItems: 3 }],
			"@stylistic/indent": ["error", "tab"],
			"@stylistic/jsx-closing-bracket-location": ["error", "tag-aligned"],
			"@stylistic/jsx-curly-spacing": ["error", { when: "never", children: { when: "never" } }],
			"@stylistic/jsx-first-prop-new-line": ["error", "multiline"],
			"@stylistic/jsx-indent-props": ["error", "tab"],
			"@stylistic/jsx-max-props-per-line": ["error", { "when": "multiline" }],
			"@stylistic/jsx-newline": ["error", { prevent: false }],
			"@stylistic/jsx-one-expression-per-line": ["error", { allow: "non-jsx" }],
			"@stylistic/jsx-pascal-case": ["error"],
			"@stylistic/jsx-quotes": ["error", "prefer-double"],
			"@stylistic/jsx-sort-props": [
				"error",
				{
					ignoreCase: true,
					callbacksLast: true,
					shorthandFirst: true,
					multiline: "ignore",
					noSortAlphabetically: false,
					reservedFirst: true,
				},
			],
			"@stylistic/jsx-tag-spacing": [
				"error",
				{
					closingSlash: "never",
					beforeSelfClosing: "always",
					afterOpening: "never",
					beforeClosing: "never",
				},
			],
			"@stylistic/multiline-ternary": ["warn", "never", { ignoreJSX: true }],
			"@stylistic/object-curly-newline": [
				"error",
				{
					ObjectExpression: {
						multiline: true,
						minProperties: 3,
					},
					ObjectPattern: {
						multiline: true,
						minProperties: 3,
					},
					ImportDeclaration: {
						multiline: true,
						minProperties: 3,
					},
					ExportDeclaration: {
						multiline: true,
						minProperties: 3,
					},
				},
			],
			"@stylistic/object-curly-spacing": ["error", "always", { objectsInObjects: false }],
			"@stylistic/operator-linebreak": ["error", "after"],
			"@stylistic/no-multi-spaces": "error",
			"@stylistic/no-multiple-empty-lines": ["error", { max: 1 }],
			"@stylistic/no-tabs": "off",
			"@stylistic/no-trailing-spaces": ["error"],
			"@stylistic/padding-line-between-statements": [
				"error",
				{ blankLine: "always", prev: "*", next: "return" },
				{ blankLine: "always", prev: "directive", next: "*" },
				{ blankLine: "any", prev: "directive", next: "directive" },
				{ blankLine: "any", prev: ["const", "let", "var"], next: ["const", "let", "var"] },
				{ blankLine: "always", prev: ["const", "let", "var"], next: "*" },
				{ blankLine: "always", prev: "*", next: ["enum", "interface", "type"] },
			],
			"@stylistic/quotes": ["error", "single"],
			"@stylistic/semi": ["error", "always"],
			"@stylistic/semi-spacing": ["error", { before: false, after: true }],
		}
	},
	// =========================================================================
	// TypeScript
	// =========================================================================
	{
		files: ["**/*.{ts,tsx}"],
		plugins: {
			"@typescript-eslint": tseslint.plugin,
		},
		rules: {
			"@typescript-eslint/no-non-null-assertion": "error",
			"@typescript-eslint/no-empty-object-type": "warn",
			"@typescript-eslint/no-explicit-any": "warn",
			"@typescript-eslint/consistent-type-imports": "error",
			"@typescript-eslint/no-unused-vars": [
				"error",
				{
					args: "all",
					argsIgnorePattern: "^_",
					caughtErrors: "all",
					caughtErrorsIgnorePattern: "^_",
					destructuredArrayIgnorePattern: "^_",
					varsIgnorePattern: "^_",
					ignoreRestSiblings: true,
				},
			],
			"@typescript-eslint/naming-convention": [
				"warn",
				{
					selector: "interface",
					format: ["PascalCase"],
					prefix: ["I"],
					leadingUnderscore: "forbid",
					trailingUnderscore: "forbid",
				},
				{
					selector: "typeAlias",
					format: ["PascalCase"],
					prefix: ["T"],
					leadingUnderscore: "forbid",
					trailingUnderscore: "forbid",
				},
				{
					selector: "enum",
					format: ["PascalCase"],
					leadingUnderscore: "forbid",
					trailingUnderscore: "forbid",
				},
				{
					selector: "enumMember",
					format: ["PascalCase"],
					leadingUnderscore: "forbid",
					trailingUnderscore: "forbid",

				},
			],
		},
	},
	// =========================================================================
	// Miscellaneous
	// =========================================================================
	{
		files: ["**/*.{ts,tsx}"],
		rules: {
			curly: ["error", "all"],
			"prefer-arrow-callback": "error",
			"func-style": ["warn", "declaration", { allowArrowFunctions: true }],
		},
	}
];

# @turbo/eslint-config

A set of shareable ESLint configurations for Turbo monorepos, including base, Next.js, and React presets.

## Installation

Install the package in your monorepo:

```bash
pnpm add -D @repo/eslint-config
```

## Usage

Extend the desired config in your ESLint config file:

```js
// eslint.config.js
module.exports = {
	extends: [
		'@turbo/eslint-config/base',
		'@turbo/eslint-config/next',
		'@turbo/eslint-config/react-internal',
	],
};
```

## Configurations

- `base` – General JavaScript/TypeScript rules
- `next` – Next.js projects
- `react-internal` – Internal React projects
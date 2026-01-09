import { nextJsConfig } from "@repo/eslint-config/next-js";
import tailwindPlugin from "eslint-plugin-better-tailwindcss";

/** @type {import("eslint").Linter.Config} */
export default [
	...nextJsConfig,
	{
		files: ["**/*.{ts,tsx}"],
		plugins: { "better-tailwindcss": tailwindPlugin },
		settings: { "better-tailwindcss": { entryPoint: "app/globals.css" }},
		rules: {
			...tailwindPlugin.configs.stylistic.rules,
			"better-tailwindcss/enforce-consistent-line-wrapping": ["error", { printWidth: 160, indent: "tab" }],
		},
	}
];

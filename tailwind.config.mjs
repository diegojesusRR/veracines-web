import defaultTheme from "tailwindcss/defaultTheme"

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				atomic: ["Atomic", "cursive"],
			},
			colors: {
				azul: "var(--color-azul)",
				rojo: "var(--color-rojo)",
				naranja: "var(--color-naranja)",
				primary: "var(--color-azul)",
				secondary: "var(--color-rojo)",
				accent: "var(--color-accent)",
				twitch: "var(--color-twitch)",
				ice: "var(--color-twitch-ice)",
			},
			screens: {
				xs: "360px",
				md: "768px",
				...defaultTheme.screens,
				"3xl": "1650px",
			},
		},
	},
	plugins: [
		function ({
			addVariant
		}) {
			addVariant("any-hover", "@media (any-hover: hover) { &:hover }")
			addVariant("mobile", "@media (any-hover: none) { & }")
		},
	],
}

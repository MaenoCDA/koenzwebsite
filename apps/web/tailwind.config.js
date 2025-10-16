const plugin = require('tailwindcss/plugin');

const config = {
	content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		borderRadius: {
			sm: '0.5rem',
			DEFAULT: '1rem',
			xl: '2rem',
			full: '9999px',
		},
		fontFamily: {
			barlow: ['var(--font-barlow)', 'sans-serif'],
			'barlow-semi-condensed': ['var(--font-barlow-semi-condensed)', 'sans-serif'],
		},
		extend: {
			backgroundImage: {
				'gradient-122': 'linear-gradient(122deg, var(--tw-gradient-stops))',
			},
			colors: {
				primary: {
					DEFAULT: 'rgb(var(--color-primary-500) / <alpha-value>)',
					50: 'rgb(var(--color-primary-50) / <alpha-value>)',
					500: 'rgb(var(--color-primary-500) / <alpha-value>)',
					700: 'rgb(var(--color-primary-700) / <alpha-value>)',
					800: 'rgb(var(--color-primary-800) / <alpha-value>)',
					900: 'rgb(var(--color-primary-900) / <alpha-value>)',
				},
				purple: {
					DEFAULT: 'rgb(var(--color-purple) / <alpha-value>)',
					50: 'rgb(var(--color-purple-50) / <alpha-value>)',
				},
				blue: {
					DEFAULT: 'rgb(var(--color-blue-500) / <alpha-value>)',
					100: 'rgb(var(--color-blue-100) / <alpha-value>)',
					200: 'rgb(var(--color-blue-200) / <alpha-value>)',
					300: 'rgb(var(--color-blue-300) / <alpha-value>)',
					400: 'rgb(var(--color-blue-400) / <alpha-value>)',
					500: 'rgb(var(--color-blue-500) / <alpha-value>)',
				},
				green: {
					DEFAULT: 'rgb(var(--color-green-500) / <alpha-value>)',
					100: 'rgb(var(--color-green-100) / <alpha-value>)',
					200: 'rgb(var(--color-green-200) / <alpha-value>)',
					300: 'rgb(var(--color-green-300) / <alpha-value>)',
					400: 'rgb(var(--color-green-400) / <alpha-value>)',
					500: 'rgb(var(--color-green-500) / <alpha-value>)',
				},
				grey: {
					DEFAULT: 'rgb(var(--color-grey-500) / <alpha-value>)',
					100: 'rgb(var(--color-grey-100) / <alpha-value>)',
					500: 'rgb(var(--color-grey-500) / <alpha-value>)',
				},
				text: {
					DEFAULT: 'rgb(var(--color-text) / <alpha-value>)',
					dark: 'rgb(var(--color-blue-500) / <alpha-value>)',
				},
				stroke: 'rgb(var(--color-stroke) / <alpha-value>)',
			},
			zIndex: {
				infinite: 999,
			},
		},
	},
	plugins: [
		plugin(function ({ addVariant }) {
			addVariant('hocus', ['&:hover', '&:focus']), addVariant('group-hocus', [':merge(.group):hover &', ':merge(.group):focus &']);
		}),
	],
};
export default config;

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'light-grey': 'hsl(212, 45%, 89%)',
				'grayish-blue': 'hsl(220, 15%, 55%)',
				'dark-blue': 'hsl(218, 44%, 22%)',
			},
			fontFamily: {
				Outfit: ['Outfit', 'sans-serif'],
			},
			dropShadow: {
				shadow: '0px 25px 25px rgba(0, 0, 0, 0.05)',
			},
		},
	},
	plugins: [],
};

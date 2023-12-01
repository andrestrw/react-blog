/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				SoftOrange: 'hsl(35, 77%, 62%)',
				Softred: 'hsl(5, 85%, 63%)',
				Offwhite: 'hsl(36, 100%, 99%)',
				GrayishBlue: 'hsl(233, 8%, 79%)',
				DarkGrayishBlue: 'hsl(236, 13%, 42%)',
				VeryDarkBlue: 'hsl(240, 100%, 5%)',
			},
			spacing: {
				400: '800px',
			},
			maxHeight: {
				136: '8.5rem',
			},
			maxWidth: {
				1920: '1920px',
			},
		},
	},
	plugins: [],
};

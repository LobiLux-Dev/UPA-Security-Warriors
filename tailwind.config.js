/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			height: {
				header: 'calc(100vh - 84.38px)',
			},
		},
	},
	plugins: [require('daisyui')],
}

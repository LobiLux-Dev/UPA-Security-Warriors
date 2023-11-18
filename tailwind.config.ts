import type { Config } from 'tailwindcss'

const config: Config = {
	content: ['./src/pages/**/*.{ts,tsx,mdx}', './src/components/**/*.{ts,tsx,mdx}', './src/app/**/*.{ts,tsx,mdx}'],
	theme: {
		extend: {
			colors: {
				primary: '#FF6079',
				secondary: '#FE3051',
				base: '#0A0A0A',
				accent: '#111111',
				info: '#A1B0BF',
			},
		},
	},
	plugins: [],
}

export default config

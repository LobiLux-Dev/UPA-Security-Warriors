import type { Config as TailwindCSSConfig } from 'tailwindcss'

import DaisyUI, { type Config as DaisyUIConfig } from 'daisyui'

const config = {
	content: ['./src/pages/**/*.{ts,tsx,mdx}', './src/components/**/*.{ts,tsx,mdx}', './src/app/**/*.{ts,tsx,mdx}'],
	daisyui: {
		themes: [
			{
				default: {
					primary: '#FF6079',
					secondary: '#FE3051',
					accent: '#111111',
					neutral: '#D8D8D8', // Improvised
					'base-100': '#0A0A0A',
					info: '#A1B0BF',
					success: '#00CC66', // Improvised
					warning: '#FFD166', // Improvised
					error: '#FF5858', // Improvised
				},
			},
		],
	} satisfies DaisyUIConfig,
	plugins: [DaisyUI],
	theme: {
		extend: {},
	},
} satisfies TailwindCSSConfig

export default config

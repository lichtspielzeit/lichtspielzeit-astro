/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			// HIER DEFINIEREN WIR DIE ANIMATION FÜR TAILWIND
			keyframes: {
				'slow-zoom': {
					'0%': { transform: 'scale(1)' },
					'100%': { transform: 'scale(1.1)' },
				}
			},
			animation: {
				'slow-zoom': 'slow-zoom 25s ease-in-out infinite alternate',
			}
		},
	},
	plugins: [],
}

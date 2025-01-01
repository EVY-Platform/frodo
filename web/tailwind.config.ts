import { type Config } from "tailwindcss";

export default {
	content: ["{routes,islands,components}/**/*.{ts,tsx,js,jsx}"],
	theme: {
		extend: {
			colors: {
				"evy-light": "#878787",
				"evy-blue": "#3478F6",
				"evy-border": "#B9B9BC",
				"evy-gray": "#3C3C42",
				"evy-light-gray": "#F5F5F5",
			},
		},
	},
} satisfies Config;

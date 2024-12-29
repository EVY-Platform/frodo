import { type Config } from "tailwindcss";

export default {
	content: ["{routes,islands,components}/**/*.{ts,tsx,js,jsx}"],
	theme: {
		extend: {
			colors: {
				"evy-grey": "#878787",
				"evy-blue": "#3478F6",
			},
		},
	},
} satisfies Config;

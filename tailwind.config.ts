import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--main-color)",
        secondary: "var(--main-color-alt)",
      },
      spacing: {
        section: "var(--main-padding)",
      },
      transitionProperty: {
        mTransition: "var(--main-transition)",
      },
      keyframes: {
        'left-move': {
          '50%': { left: '0px', width: '12px', height: '12px' },
          '100%': { left: '0px', width: '100%', height: '100%', borderRadius: '0px' },
        },
        'right-move': {
          '50%': { right: '0px', width: '12px', height: '12px' },
          '100%': { right: '0px', width: '100%', height: '100%', borderRadius: '0px' },
        },
      },
      animation: {
        'left-move': 'left-move 0.5s linear forwards',
        'right-move': 'right-move 0.5s linear forwards',
      },
    },
  },
  plugins: [],
};

export default config;

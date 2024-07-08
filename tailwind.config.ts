import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a"
        }
      },
      backgroundColor: {
        'dark': 'rgba(17, 24, 39, var(--tw-bg-opacity))', // bg-gray-900
      },
      textColor: {
        'dark': 'rgba(255, 255, 255, var(--tw-text-opacity))', // text-white
      },
      transitionProperty: {
        'width': 'width',
      }
    },
  },
  plugins: [
  ],
};
export default config;

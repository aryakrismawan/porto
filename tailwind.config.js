/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border, 0 0% 20%))",
        input: "hsl(var(--input, 0 0% 20%))",
        ring: "hsl(var(--ring, 74 79% 50%))",
        background: "hsl(var(--background, 0 0% 0%))",
        foreground: "hsl(var(--foreground, 0 0% 98%))",
        primary: {
          DEFAULT: "hsl(var(--primary, 74 79% 50%))",
          foreground: "hsl(var(--primary-foreground, 0 0% 0%))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary, 0 0% 15%))",
          foreground: "hsl(var(--secondary-foreground, 0 0% 98%))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted, 0 0% 15%))",
          foreground: "hsl(var(--muted-foreground, 0 0% 65%))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent, 74 79% 50%))",
          foreground: "hsl(var(--accent-foreground, 0 0% 0%))",
        },
        card: {
          DEFAULT: "hsl(var(--card, 0 0% 7%))",
          foreground: "hsl(var(--card-foreground, 0 0% 98%))",
        },
      },
      borderRadius: {
        lg: "0.5rem",
        md: "calc(0.5rem - 2px)",
        sm: "calc(0.5rem - 4px)",
      },
    },
  },
  plugins: [],
}

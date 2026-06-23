import tailwindcssAnimate from "tailwindcss-animate";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        gold: {
          DEFAULT: "#C9A94E",
          light: "#D4B45A",
          dark: "#A88A3A",
        },
        teal: {
          DEFAULT: "#208B7E",
          light: "#2DB9AA",
          dark: "#1A6B61",
        },
        cream: {
          DEFAULT: "#FAF8F4",
          light: "#FCFBF8",
          dark: "#F5F1E8",
        },
        sand: {
          DEFAULT: "#F5F1E8",
          light: "#F8F5EF",
          dark: "#EDE8DB",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      boxShadow: {
        luxury: "0 4px 20px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.02)",
        "luxury-lg": "0 10px 40px rgba(0, 0, 0, 0.06), 0 2px 8px rgba(0, 0, 0, 0.03)",
        "luxury-xl": "0 20px 60px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.03)",
        "gold": "0 0 0 1px rgba(212, 169, 74, 0.15), 0 0 15px rgba(212, 169, 74, 0.03)",
        "card": "0 2px 12px rgba(0, 0, 0, 0.04), 0 1px 4px rgba(0, 0, 0, 0.02)",
        "card-hover": "0 8px 30px rgba(0, 0, 0, 0.06), 0 2px 8px rgba(0, 0, 0, 0.03)",
      },
      fontSize: {
        "display-lg": ["5rem", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        "display": ["4rem", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        "heading-1": ["3.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "heading-2": ["3rem", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "heading-3": ["2.5rem", { lineHeight: "1.2", letterSpacing: "-0.015em" }],
        "heading-4": ["2rem", { lineHeight: "1.25", letterSpacing: "-0.01em" }],
      },
      spacing: {
        "section": "6rem",
        "section-lg": "8rem",
        "section-xl": "10rem",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
        "out-soft": "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;
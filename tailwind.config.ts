import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        sm: "540px", // Small screens and up
        md: "720px", // Medium screens and up
        lg: "960px", // Large screens and up
        xl: "1140px", // Extra large screens and up
        "2xl": "1320px", // 2xl screens and up
      },
      fontFamily: {
        hind: ["var(--font-hind)"],
        nato: ["var(--font-nato)"],
      },
      colors: {
        orange: "#F66962",
        "orange-light": "#f38681",
        dark: "#26292c",
        "dark-light": "#685f78",
      },
    },
  },
  plugins: [require("daisyui")],
  // daisyUI config (optional - here are the default values)
  daisyui: {
    themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: ["light", "dark"], // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};
export default config;

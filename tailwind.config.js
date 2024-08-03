/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF3811",
        secondary: "#737373",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#FF3811",
          secondary: "#737373",

          ".btn-primary": {
            color: "#fff",
          },

          ".btn-outline.btn-primary:hover": {
            color: "#fff",
          },
        },
      },
      "dark",
      "light",
    ],
  },
};

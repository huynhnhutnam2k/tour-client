/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true, // Centers the container
      padding: "80px", // Sets horizontal padding
      screens: {
        sm: "100%", // 100% width on small screens
        md: "100%", // 100% width on medium screens
        lg: "1200px", // Max width on large screens
        xl: "1500px", // Max width on extra large screens
      },
    },
    extend: {
      boxShadow: {
        oldPrice: "0 0 40px 8px #fff",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-flash-sale":
          "radial-gradient(circle 597px at 93% 9.8%, #ff3d59 1.7%, #fcfb2c 97%);",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        gray: {
            primary: "#e8e8e8"
        },
        blue: {
          primary: "#e4f7ff",
          secondary: "#2154a3",
          third: "#a6c3e1",
          fourth: "#1b4585",
        },
        yellow: {
          primary: "#fec85c",
        },
      },
    },
  },
  plugins: [],
};

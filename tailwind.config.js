/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true, // Centers the container
      padding: {
        sm: "15px", // 100% width on small screens
        md: "15px", // 100% width on medium screens
        lg: "80px", // Max width on large screens
        xl: "80px", // Max width on extra large screens
      },
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
        phone: "0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)",
        booking: "0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23)",
        social: "0 0 5px 2px rgba(255,255,255,.5)",
        backLink: '2px 2px 4px 0px #00000033'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-flash-sale":
          "radial-gradient(circle 597px at 93% 9.8%, #ff3d59 1.7%, #fcfb2c 97%);",
        "gradient-form": "linear-gradient(to top, #fff1eb 0, #ace0f9 100%);",
        "gradient-phone":
          "radial-gradient(circle farthest-corner at 10% 20%,#0eae57 0,#0c7475 90%);",
      },
      animation: {
        ping2: "ping2 1s ease-in-out infinite",
        pulse2: "pulse2 1s infinite",
      },
      keyframes: {
        ping2: {
          "0%": { width: "0px", height: "0px" },
          "90%": { width: "60px", height: "60px" },
        },
        pulse2: {
          "0%": { boxShadow: "0 0 0 0 #1b4585" },
          "100%": { boxShadow: "0 0 0 20px rgba(0,0,0,0)" },
        },
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        gray: {
          primary: "#e8e8e8",
          secondary: "rgba(0, 0, 0, 0.5)"
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

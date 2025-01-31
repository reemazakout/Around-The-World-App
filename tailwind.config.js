/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./index.html"],
  darkMode: "class",
  
  theme: {
    container: {
      center: true,
      screens: {
        sm: "600px",
        md: "700px",
        lg: "980px",
        xl: "1200px",
        "2xl": "1450px",
      },
    },
    extend: {
      fontFamily:{
        'inter': ['Inter', 'sans-serif'],
      } ,

      colors: {
        'primary': '#1F2937',
        
      }
    },
  },
  plugins: [],
};

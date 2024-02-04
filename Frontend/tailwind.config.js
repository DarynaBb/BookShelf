/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
      extend: {
        colors: {
          "bg-gray": '#F4F5F5',
          "bg-beige": '#F8F3ED',
          "bg-progress": "#FEE830"
      },
      },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
};

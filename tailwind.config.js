// /** @type {import('tailwindcss').Config} */
// import daisyui from "daisyui";
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {},
    
//   },
//   plugins: [daisyui],
// }; 
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ['light', 'cupcake'],
  },
  // eslint-disable-next-line no-undef
  plugins: [require('daisyui')],
};
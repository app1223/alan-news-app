module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      
      animation:{
        tilt:"tilt 10s infinite linear",
      },
      keyframes:{
        tilt:{
          "0%, 50% ,100%":{
            transform:"rotate(odeg)",
          },
          "25%":{
            transform: "rotate(3deg)",
          },
          "75%":{
            transform: "rotate(-3deg)",
          },
        },
      },
    },
  },
  variants: {
    extend: {
    
    },
  },
  plugins: [],
}

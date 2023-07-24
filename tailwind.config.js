/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {   
    fontFamily: {    
      'loto':[ 'Lato', 'sans-serif'],
      
      'Roboto':['Roboto', 'sans-serif'],
      'raleway':['Raleway', 'sans-serif'] // Ensure fonts with spaces have " " surrounding it.
    }, 
    extend: {     
      colors: {
        btn_themes: '#32d3d9',
        theme1: '#ff0000'
    },
    screens: {
        xs: "100px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        xxl: "1400px",
    },
       
    }
  },
  plugins: [],
}


   
// tailwind.config.js
module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      screens: {
        // 'sm': {'min': '640px', 'max': '767px'},
        // 'md': {'min': '768px', 'max': '1023px'},
        // 'lg': {'min': '1024px', 'max': '1279px'},
        // 'xl': {'min': '1280px', 'max': '1535px'},
        // '2xl': {'min': '1536px'},
        'sm': {'max': '639px'}, //510  //p-15
        'md': {'min': '640px', 'max': '767px'},  //690
        'lg': {'min': '768px', 'max': '1024px'},  //930
        'xl': {'min': '1024px', 'max': '1279px'}, //1110
        '2xl': {'min': '1280px'},
      },
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
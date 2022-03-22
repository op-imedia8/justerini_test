module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './public/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage:{
        'hero-pattern': "url(./assets/Logos/scroll_group.png)",
       
      },
      colors: {
        'brand-blue': '#101531',
        'brand-blue-light': '#B7D9DC',
        'brand-gold': '#B59A66',
        'text-color': '#232323',
        'bg-dark-purple': '#3a2398',
        'bg-light-purple': '#7f61ff',
        'bg-midle-purple': '#583ec5',
        'bg-darkest-purple': '#332556',
        'brand-gray': '#7c848f',
      },
      fontFamily: {
        'nunito': ['Nunito', 'sans-serif'],
        'readex': ['Readex Pro', 'sans-serif'],
        'lato': ['lato', 'sans-serif'],
        'garamound': ['EB Garamond', 'serif'],
        
      
      },
      outline: {
        'brand-blue': '2px solid #4bacbd',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ]
}
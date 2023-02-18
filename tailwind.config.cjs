/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      // Define your custom font here
      'sans': ['Inter', 'sans-serif'],
      'mono': ['Consolas', 'Courier New', 'monospace']
    },
    extend: {
      colors: {
        // Define your custom color palette here
        'back-grey': '#1c1c1c',
        'input-grey': '#282828',
        'dark-blue': '#024d75',
        'even-darker-blue': '#024d758e',
        'shadow-blue': '#024d7536',
        'placeholder': '#9ca3ae',
        'good-warning-green': '#2a5f02',
        'bad-warning-red': '#750802'
      },
      boxShadow: {
        'md': '0 0 10px',
      }
    },
  },
  plugins: [],
}

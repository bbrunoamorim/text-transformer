module.exports = {
  content: [
    './src/components/**/*.jsx',
    './src/pages/**/*.jsx',
    './src/**/*.jsx',
    './src/index.html'
  ],
  theme: {
    fontFamily: {
      'serif': ['Lora'],
    }
  },
  plugins: [
    require('tailwind-scrollbar'),
  ]
};

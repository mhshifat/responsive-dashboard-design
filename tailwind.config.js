module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '390px',
      md: '800px',
      lg: '1440px',
    },
    colors: {
      primary: '#00C614',
      secondary: '#F2F2F3',
      white: '#ffffff',
      'primary-text': '#3E3F48',
      'secondary-text': '#88898E',
      border: '#E5E5E6',
      success: '#44C776',
      error: '#F52828',
      warning: '#F58A28',
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
  },
  plugins: [],
}

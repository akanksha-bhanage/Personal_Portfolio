/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: '#0B0B0B',
        secondary: '#C5C5C5',
        tertiary: '#151518',
        'black-100': '#1A1A1F',
        'black-200': '#090325',
        'white-100': '#f3f3f3',
        flashWhite: '#0B0B0B',
        platinum: '#e6e6e9',
        platinumLight: '#f4f4f5',
        timberWolf: '#d4d4d8',
        taupe: '#9999a1',
        silver: '#d6d6d6',
        dim: '#66666e',
        battleGray: '#858585',
        french: '#b5b5ba',
        night: '#0B0B0B',
        jet: '#151518',
        jetLight: '#1A1A1F',
        jetGray: '#6d6d74',
        richBlack: '#2e2e2e',
        eerieBlack: '#0B0B0B',
        onyx: '#5b5b5b',
      },
      boxShadow: {
        card: '0px 35px 120px -15px #050505',
        cardLight: '0px 19px 38px #0f0f12, 0px 15px 12px #0f0f12',
      },
      screens: {
        xs: '450px',
        sm: '640px',
        md: '768px',
        xmd: '900px',
        lg: '1025px',
        xl: '1280px',
        '2xl': '1536px',
        '3xl': '1800px',
      },
      backgroundImage: {
        about:
          'linear-gradient(180deg, #0B0B0B 0%, #151518 100%)',
        experience:
          'linear-gradient(180deg, #151518 0%, #0B0B0B 100%)',
        experienceLight:
          'linear-gradient(180deg, rgba(11,11,11,0.95) 0%, rgba(21,21,24,0.95) 100%)',
        hero: 'linear-gradient(135deg, rgba(11,11,11,0.7) 0%, rgba(11,11,11,0.95) 100%)',
        'hero-mobile':
          'linear-gradient(137deg, rgba(11,11,11,0.8) 0%, rgba(11,11,11,1) 100%)',
        tech: 'linear-gradient(180deg, #0B0B0B 0%, #151518 100%)',
      },
      fontFamily: {
        arenq: ['Arenq'],
        beckman: ['Beckman'],
        mova: ['Mova'],
        overcameBold: ['Overcame Bold'],
        overcameOutline: ['Overcame Outline'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

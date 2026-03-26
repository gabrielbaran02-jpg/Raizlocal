import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef7ff',
          100: '#d9edff',
          500: '#1777f2',
          700: '#1258b9',
          900: '#103a70'
        }
      }
    }
  },
  plugins: []
};

export default config;

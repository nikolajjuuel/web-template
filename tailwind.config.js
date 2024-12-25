import { rotate } from 'three/webgpu';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'], // Adjust the paths to your project structure

  // content: [
  //   "./index.html",
  //   "./src/**/*.{js,ts,jsx,tsx}",

  // ], 

  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        rotate: {
          '0%%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(36deg)' },
        },
        slideNext: {
          '0%%': { transform: 'translateX(0px)' },
          '25%': { transform: 'translateX(40px)' },
          '75%': { transform: 'translateX(50px)' },
          '100%': { transform: 'translateX(59px)' },
        },
        slideOver: {
          '0%%': { transform: 'translateX(0px)' },
          '25%': { transform: 'translateX(59px)' },
          '75%': { transform: 'translateX(73px)' },
          '100%': { transform: 'translateX(86px)' },
        },
      },
      animation: {
        rotate: 'rotate 2s linear infinite',
        wiggle: 'wiggle 1s ease-in-out infinite',
        fadeIn: 'fadeIn 2s ease-in infinite',
        slide: 'slide 2s ease-in infinite',
        slideNext: 'slideNext 4s ease-in infinite',
        slideOver: 'slideOver 4s ease-in infinite',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}


import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/**/*.{html,js,jsx,}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        // Bounces 5 times 1s equals 2 seconds
        "pulse-short": "pulse 1s ease-in-out 2",
      },
      colors: {
        richblack: "#071e22",
        blue: "#AC66F2",
        grayblue: "#AC66F2",
        light: "#f6f6f3",
        lightred: "#8FD4F5",
        red: "#1B3BF2",
      },
      
      fontFamily: {
        'Montserrat': ['Montserrat', "sans-serif"]
      }
    },
  },
  plugins: [],
}
export default config
